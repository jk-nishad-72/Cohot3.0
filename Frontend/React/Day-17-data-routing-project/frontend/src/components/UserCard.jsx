import React from "react";
import { FaUserCircle, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const UserCard = ({ user }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-4"
    >
      {/* Top */}
      <div className="flex items-center gap-4">
        <FaUserCircle size={50} className="text-blue-500" />

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {user?.name?.firstname} {user?.name?.lastname}
          </h2>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaEnvelope />
            <span>{user?.email}</span>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <FaMapMarkerAlt />
        <span>
          {user?.address?.city}, {user?.address?.street}
        </span>
      </div>

      {/* Username */}
      <div className="text-sm text-gray-500">
        Username: <span className="font-medium">{user?.username}</span>
      </div>
    </motion.div>
  );
};

export default UserCard;