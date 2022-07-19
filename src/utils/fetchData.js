export const exerciseOptions = {
  method: "GET",
  url: "exercisedb.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "d7e29fe66amsh35e2f13b9f67a83p134149jsn6c35ce47843c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "d7e29fe66amsh35e2f13b9f67a83p134149jsn6c35ce47843c",
    //"f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
