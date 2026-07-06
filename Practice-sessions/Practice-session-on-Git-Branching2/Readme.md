
# 📘 Git & Branching – Day 40 Notes

## 🔹 1. See All Branches

```bash
git branch
```

👉 Shows all local branches.
👉 The current branch is highlighted with `*`.

---

## 🔹 2. Create New Branch

```bash
git branch branch-name
```

👉 Creates a new branch but does NOT switch to it.

---

## 🔹 3. Switch to Another Branch

```bash
git checkout branch-name
```

👉 Moves you from current branch to another branch.

---

## 🔹 4. Create + Switch Branch (One Step)

```bash
git checkout -b branch-name
```

👉 Creates a new branch AND switches to it instantly.
💡 Saves time and is commonly used.

---

## 🔹 5. Branch Status

```bash
git status
```

👉 Shows:

* Current branch
* Changes (staged/unstaged)
* Files status

---

## 🔹 6. Delete a Branch

```bash
git branch -d branch-name
```

👉 Deletes a branch (safe delete).
⚠️ Use `-D` for force delete.

---

## 🔹 7. See All Commits

```bash
git log
```

👉 Shows commit history with:

* Commit ID
* Author
* Date
* Message

💡 Shortcut:

```bash
git log --oneline
```

---

## 🔹 8. Merge Branch into Main

```bash
git checkout main
git merge branch-name
```

👉 Combines changes from another branch into `main`.

---

## 🔹 9. Merge Conflict (Practical Understanding)

👉 Happens when:

* Same file
* Same lines modified in different branches

Git shows conflict markers like:

```text
<<<<<<< HEAD
Your changes
=======
Other branch changes
>>>>>>> branch-name
```

👉 Fix manually → then:

```bash
git add .
git commit
```

---

## 🔹 10. Remote Branching & Pull Requests

### Push Branch to Remote

```bash
git push origin branch-name
```

👉 Uploads branch to GitHub.

---

### Pull Request (PR)

👉 A request to merge your branch into `main`.

Steps:

1. Push branch
2. Open GitHub
3. Click **Compare & Pull Request**
4. Review & merge

---

## 🔹 11. After Merging PR – Pull Latest Code

```bash
git pull origin main
```

👉 Updates your local project with latest remote changes.

---

## 🧠 Key Takeaway

* Branching = Safe experimentation
* Merge = Combine work
* PR = Collaboration workflow
* Conflict = Normal (and solvable)

👉 Mastering Git = Becoming a real-world developer 🚀
