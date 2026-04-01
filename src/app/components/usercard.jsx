"use client";

import { motion } from "framer-motion";

export default function UserCard({ user }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl text-white flex gap-6 mt-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <img
        src={user.avatar_url}
        className="w-24 h-24 rounded-full"
        alt={user.name}
      />

      <div>
        <h2 className="text-xl font-bold">
          {user.name || user.login}
        </h2>

        {user.bio && <p className="text-gray-400">{user.bio}</p>}

        <div className="flex gap-4 mt-3">
          <span>{user.followers} Followers</span>
          <span>{user.following} Following</span>
          <span>{user.public_repos} Repos</span>
        </div>
      </div>
    </motion.div>
  );
}