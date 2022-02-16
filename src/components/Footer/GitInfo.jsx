import React, { useEffect, useState } from "react";

const Commit = ({ sha, commit, html_url, author, committer }) => {
  return (
    <a href={html_url}>
      <div className="border-2 p-2 gap-2 flex flex-col rounded-2xl">
        <div className="flex gap-2">
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src={author.avatar_url}
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold">{author.login}</div>
            <div className="text-sm font-bold">{new Date(commit.committer.date).toLocaleString("th-TH")}</div>
          </div>
        </div>
        <div className="text-lg">{commit.message}</div>
      </div>
    </a>
  );
};

export default function GitInfo() {
  const [CommitDatas, setCommitDatas] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await fetch(
        "https://api.github.com/repos/Teerut26/landing-page-visut-vite/commits"
      );
      let data = await res.json();
      setCommitDatas(data);
      console.log(data);
    })();
  }, []);

  if (CommitDatas.length === 0) {
    return <></>;
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="flex gap-1 p-2 justify-center">
        <div className="flex bg-rose-500 text-white px-3 py-1 items-center justify-center rounded-xl gap-2">
          <div>
            <i class="bi bi-git"></i>
          </div>
          <div className="text-bold">{CommitDatas.length}</div>
        </div>
        <div className="flex bg-rose-500 text-white px-3 py-1 items-center justify-center rounded-xl gap-2">
          <div>
            <i class="bi bi-calendar-fill"></i>
          </div>
          <div className="text-bold">
            {new Date(CommitDatas[0].commit.committer.date).toLocaleString(
              "th-TH"
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {CommitDatas.map((item) => (
          <Commit {...item} />
        ))}
      </div>
    </div>
  );
}
