import { useState } from "react";

export default function InstagramProfile() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProfile = async () => {
        console.log("CLICK");
        console.log("USERNAME:", username);

        if (!username) {
            console.log("EMPTY USERNAME");
            return;
        }

        const res = await fetch("http://localhost:3001/api/instagram/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username }),
        });

        console.log("STATUS:", res.status);
        const json = await res.json();
        console.log("DATA:", json);

        setData(json.result);
    };

    return (
        <div>
            <input
                placeholder="Instagram username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={fetchProfile}>Получить</button>

            {loading && <p>Загрузка...</p>}

            {data && (
                <div>
                    <img
                        src={`https://corsproxy.io/?${data.profile_pic_url_hd}`}
                    />
                    <h3>@{data.username}</h3>
                    <p>{data.biography}</p>
                    <p>Followers: {data.edge_followed_by.count}</p>
                    <p>Following: {data.edge_follow.count}</p>
                    <p>Posts: {data.edge_owner_to_timeline_media.count}</p>
                </div>
            )}
        </div>
    );
}
