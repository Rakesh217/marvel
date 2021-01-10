export function getDataFromServer(url) {
  let myHeader = new Headers();
  myHeader.append("content-type", "application/json");

  return fetch(url, {
    method: "GET",
    headers: myHeader,
  });
}

export function postDataToServer(url, myBody) {
  let myHeader = new Headers();
  myHeader.append("Content-Type", "application/json");
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(myBody),
    headers: myHeader,
  });
}

export function validateUser(api, myBody) {
  let myHeader = new Headers();
  myHeader.append("Content-Type", "application/json");
  return fetch(api, {
    method: "POST",
    body: JSON.stringify(myBody),
    headers: myHeader,
  });
}
