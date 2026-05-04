"use client";

import { motion } from "framer-motion";

export default function RepoList({ repos }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {repos.slice(0, 5).map((repo, i) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          className="bg-blue-600 px-3 py-1 rounded text-sm"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          {repo.name}
        </motion.a>
      ))}
    </div>
  );
}