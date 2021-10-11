import { httpGet, httpPost, httpPut } from '../Lib/RestTemplate';

const apiKey = 'ABCD';
const asset = 'reach';

export const searchArticles = (userId: string, criteria: any) => {
  return httpPost(`/${asset}/article/search`, criteria, {
    headers: {
      Authorization: getAuth(userId),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return Promise.resolve(response.data);
      }
      return Promise.resolve([]);
    })
    .catch((error) => {
      return Promise.resolve([]);
    });
};

export const getTags = (userId: string) => {
  return httpGet(`/${asset}/tag`, {
    headers: {
      Authorization: getAuth(userId),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return Promise.resolve(response.data);
      }
      return Promise.resolve([]);
    })
    .catch((error) => {
      return Promise.resolve([]);
    });
};

export const getCategories = (userId: string) => {
  return httpGet(`/${asset}/category`, {
    headers: {
      Authorization: getAuth(userId),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return Promise.resolve(response.data);
      }
      return Promise.resolve([]);
    })
    .catch((error) => {
      return Promise.resolve([]);
    });
};

export const getArticle = (userId: string, id: string) => {
  return httpGet(`/${asset}/article/${id}`, {
    headers: {
      Authorization: getAuth(userId),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return Promise.resolve(response.data);
      }
      return Promise.resolve(null);
    })
    .catch((error) => {
      return Promise.resolve(null);
    });
};

export const saveArticle = (userId: string, payload: any) => {
  console.log(payload);
  return httpPut(`/${asset}/article`, payload, {
    headers: {
      Authorization: getAuth(userId),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return Promise.resolve(response.data);
      }
      return Promise.resolve(null);
    })
    .catch((error) => {
      return Promise.resolve(null);
    });
};

export const saveCategory = (userId: string, payload: any) => {
  return httpPut(`/${asset}/category`, payload, {
    headers: {
      Authorization: getAuth(userId),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return Promise.resolve(response.data);
      }
      return Promise.resolve(null);
    })
    .catch((error) => {
      return Promise.resolve(null);
    });
};

const getAuth = (userId: string) => {
  return `${apiKey} ${userId}`;
};
