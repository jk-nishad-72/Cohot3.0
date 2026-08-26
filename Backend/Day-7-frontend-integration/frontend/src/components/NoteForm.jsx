// Reusable note editor — used for both "Add Note" and "Edit Note".
// Pass mode="create" or mode="edit"; the submit button label and callback
// follow automatically. Formatting is a lightweight markdown-style wrap
// applied to a plain <textarea> (no execCommand / contentEditable), so it
// stays fully controlled and predictable inside React.
//
// npm i motion react-icons

import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiTag, FiX, FiSave, FiLoader, FiCheck, FiPaperclip } from 'react-icons/fi';
import { TbBold, TbItalic, TbUnderline, TbList, TbListNumbers } from 'react-icons/tb';

const NoteForm = ({
  mode = 'create',
  initialTitle = '',
  initialTags = [],
  initialContent = '',
  onSubmit,
  onCancel,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [tags, setTags] = useState(initialTags);
  const [tagDraft, setTagDraft] = useState('');
  const [content, setContent] = useState(initialContent);
  const [attachments, setAttachments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const isDirty = useMemo(() => {
    return (
      title !== initialTitle ||
      content !== initialContent ||
      tags.length !== initialTags.length ||
      tags.some((t, i) => t !== initialTags[i])
    );
  }, [title, content, tags, initialTitle, initialContent, initialTags]);

  const isValid = title.trim().length > 0;

  // ---- formatting helpers (operate on the textarea selection) ----
  const wrapSelection = (marker) => {
    const el = textareaRef.current;
    if (!el) return;
    const { selectionStart, selectionEnd, value } = el;
    const selected = value.slice(selectionStart, selectionEnd);
    const next = value.slice(0, selectionStart) + marker + selected + marker + value.slice(selectionEnd);
    setContent(next);
    requestAnimationFrame(() => {
      el.focus();
      el.selectionStart = selectionStart + marker.length;
      el.selectionEnd = selectionStart + marker.length + selected.length;
    });
  };

  const prefixLines = (prefixFor) => {
    const el = textareaRef.current;
    if (!el) return;
    const { selectionStart, selectionEnd, value } = el;
    const lineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;
    const lineEnd = value.indexOf('\n', selectionEnd) === -1 ? value.length : value.indexOf('\n', selectionEnd);
    const block = value.slice(lineStart, lineEnd);
    const nextBlock = block
      .split('\n')
      .map((line, i) => `${prefixFor(i)}${line}`)
      .join('\n');
    const next = value.slice(0, lineStart) + nextBlock + value.slice(lineEnd);
    setContent(next);
    requestAnimationFrame(() => el.focus());
  };

  const toolbar = [
    { label: 'Bold', icon: TbBold, action: () => wrapSelection('**') },
    { label: 'Italic', icon: TbItalic, action: () => wrapSelection('_') },
    { label: 'Underline', icon: TbUnderline, action: () => wrapSelection('++') },
  ];
  const listTools = [
    { label: 'Bulleted list', icon: TbList, action: () => prefixLines(() => '- ') },
    { label: 'Numbered list', icon: TbListNumbers, action: () => prefixLines((i) => `${i + 1}. `) },
  ];

  // ---- tags ----
  const addTag = () => {
    const value = tagDraft.trim();
    if (value && !tags.includes(value)) setTags((prev) => [...prev, value]);
    setTagDraft('');
  };
  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    } else if (e.key === 'Backspace' && !tagDraft && tags.length) {
      setTags((prev) => prev.slice(0, -1));
    }
  };
  const removeTag = (tag) => setTags((prev) => prev.filter((t) => t !== tag));

  // ---- attachments ----
  const handleFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length) setAttachments((prev) => [...prev, ...files.map((f) => f.name)]);
    e.target.value = '';
  };
  const removeAttachment = (name) => setAttachments((prev) => prev.filter((a) => a !== name));

  // ---- submit ----
  const handleSubmit = async () => {
    if (!isValid || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await onSubmit?.({ title: title.trim(), tags, content, attachments });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        {toolbar.map(({ label, icon: Icon, action }) => (
          <motion.button
            key={label}
            type="button"
            title={label}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            onClick={action}
            className="rounded-md p-1.5 text-slate-600 hover:bg-slate-200/70"
          >
            <Icon size={16} />
          </motion.button>
        ))}

        <span className="mx-1.5 h-5 w-px bg-slate-300" />

        {listTools.map(({ label, icon: Icon, action }) => (
          <motion.button
            key={label}
            type="button"
            title={label}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            onClick={action}
            className="rounded-md p-1.5 text-slate-600 hover:bg-slate-200/70"
          >
            <Icon size={16} />
          </motion.button>
        ))}

        <span className="mx-1.5 h-5 w-px bg-slate-300" />

        <motion.button
          type="button"
          title="Attach file"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => fileInputRef.current?.click()}
          className="rounded-md p-1.5 text-slate-600 hover:bg-slate-200/70"
        >
          <FiPaperclip size={16} />
        </motion.button>
        <input ref={fileInputRef} type="file" multiple onChange={handleFiles} className="hidden" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-6 py-5">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
          className="w-full border-none bg-transparent text-3xl font-bold text-slate-800 placeholder:font-bold placeholder:text-slate-400 focus:outline-none"
        />

        <div className="mt-3 flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
          <FiTag size={15} className="shrink-0 text-slate-400" />
          <AnimatePresence initial={false}>
            {tags.map((tag) => (
              <motion.span
                key={tag}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1 rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="rounded-full p-0.5 hover:bg-indigo-200"
                  aria-label={`Remove ${tag}`}
                >
                  <FiX size={11} />
                </button>
              </motion.span>
            ))}
          </AnimatePresence>
          <input
            value={tagDraft}
            onChange={(e) => setTagDraft(e.target.value)}
            onKeyDown={handleTagKeyDown}
            onBlur={addTag}
            placeholder="Add tags..."
            className="min-w-[100px] flex-1 border-none bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
        </div>

        {attachments.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {attachments.map((name) => (
              <span
                key={name}
                className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
              >
                <FiPaperclip size={12} />
                {name}
                <button
                  type="button"
                  onClick={() => removeAttachment(name)}
                  className="rounded-full p-0.5 hover:bg-slate-200"
                  aria-label={`Remove ${name}`}
                >
                  <FiX size={11} />
                </button>
              </span>
            ))}
          </div>
        )}

        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing..."
          className="mt-4 min-h-[420px] flex-1 resize-none border-none bg-transparent text-base leading-relaxed text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/60 px-6 py-4">
        <div className="flex items-center gap-2 text-sm">
          {isDirty ? (
            <>
              <motion.span
                className="h-2 w-2 rounded-full bg-amber-500"
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-slate-500">Unsaved changes</span>
            </>
          ) : (
            <>
              <FiCheck size={14} className="text-emerald-500" />
              <span className="text-slate-400">All changes saved</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={onCancel}
            className="text-sm font-medium text-slate-500 hover:text-slate-700"
          >
            Cancel
          </button>
          <motion.button
            type="button"
            whileHover={{ scale: isValid ? 1.02 : 1 }}
            whileTap={{ scale: isValid ? 0.97 : 1 }}
            onClick={handleSubmit}
            disabled={!isValid || isSubmitting}
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                className="flex"
              >
                <FiLoader size={16} />
              </motion.span>
            ) : (
              <FiSave size={16} />
            )}
            {mode === 'edit' ? 'Update Note' : 'Save Note'}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;