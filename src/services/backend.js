//handle responses
function handleResponse(resp) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}

//choode db patch

const dbPath = (dest) => {
  /*eslint default-case: ["error", { "commentPattern": "^skip\\sdefault" }]*/
  switch (dest) {
    case "dishes":
      return `http://localhost:8080/dishes`;
    case "stock":
      return `http://localhost:8080/stock`;
    //skip default
  }
};
// Endpoint to sign in
const signInEndpoint = async (email, password) => {
  return fetch(`http://localhost:8080/auth/login`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};
export { signInEndpoint };

// Endpoint do
const getUserEndpoint = async () => {
  return fetch(`http://localhost:8080/auth/user`, {
    credentials: "include",
  }).then(handleResponse);
};
export { getUserEndpoint };

const signOutEndpoint = async () => {
  return fetch(`http://localhost:8080/auth/logout`, {
    credentials: "include",
    method: "POST",
  }).then(handleResponse);
};
export { signOutEndpoint };

//endpoints to Data

export async function createEndpoint(objDish, path) {
  const resp = await fetch(dbPath(path), {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objDish),
  });
  return handleResponse(resp);
}

export async function updateEndpoint(obj, path) {
  const resp = await fetch(`${dbPath(path)}/${obj.id}`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return handleResponse(resp);
}

export async function deleteEndpoint(dishId, path) {
  const resp = await fetch(`${dbPath(path)}/${dishId}`, {
    credentials: "include",
    method: "DELETE",
  });
  return handleResponse(resp);
}

const getEndpointBypage = async (page, limit, path, field) => {
  const resp = await fetch(
    `${dbPath(path)}?_sort=${field}&_page=${page}&_limit=${limit}`,
    {
      credentials: "include",
    }
  );
  return handleResponse(resp);
};
export { getEndpointBypage };

export async function getEndpointById(id, path) {
  const resp = await fetch(`${dbPath(path)}${id}`, {
    credentials: "include",
  });
  return handleResponse(resp);
}

export async function getEndpoint(path) {
  const resp = await fetch(dbPath(path), {
    credentials: "include",
  });
  return handleResponse(resp);
}

const getSearchEndpoint = async (page, limit, path, field, searchTerm) => {
  const resp = await fetch(
    `${dbPath(
      path
    )}?${field}_like=${searchTerm}&_sort=${field}&_page=${page}&_limit=${limit}`,
    {
      credentials: "include",
    }
  );
  return handleResponse(resp);
};
export { getSearchEndpoint };

const getSearchEndpointTotalRecords = async (
  limit,
  path,
  field,
  searchTerm
) => {
  const resp = await fetch(
    `${dbPath(path)}?${field}_like=${searchTerm}&_page=1&_limit=${limit}`,
    {
      credentials: "include",
    }
  );
  //
  const total = resp.headers.get("x-total-count");
  const totalPages = Math.ceil(total / limit);
  return totalPages;
};
export { getSearchEndpointTotalRecords };

const getEndpointTotalRecords = async (limit, path) => {
  const resp = await fetch(`${dbPath(path)}?_page=1&_limit=${limit}`, {
    credentials: "include",
  });
  const total = resp.headers.get("x-total-count");
  const totalPages = Math.ceil(total / limit);
  return totalPages;
};
export { getEndpointTotalRecords };
