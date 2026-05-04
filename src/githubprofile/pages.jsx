"use client";

import { useState } from "react";
import SearchForm from "../app/components/searchform";
import UserCard from "../app/components/usercard";
import RepoList from "../app/components/repolist";
import ErrorCard from "../app/components/errorcard";

const API_URL = "https://api.github.com/users";

export default function GitHubprofile() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const fetchUser = async (username) => {
    try {
      setError("");

      const res = await fetch(`${API_URL}/${username}`);
      if (!res.ok) throw new Error("User not found");

      const userData = await res.json();
      setUser(userData);

      const repoRes = await fetch(
        `${API_URL}/${username}/repos?sort=created`
      );
      const repoData = await repoRes.json();
      setRepos(repoData);

    } catch (err) {
      setUser(null);
      setRepos([]);
      setError("No profile with this username");
    }
  };

  return (
    <div className="flex flex-col items-center py-8">
      <SearchForm onSearch={fetchUser} />

      {error && <ErrorCard message={error} />}
      {user && <UserCard user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}