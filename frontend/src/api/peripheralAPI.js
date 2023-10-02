import { apiSpringInstance, apiSpringAuthInstance } from "./index.js";

const api = apiSpringInstance();
const apiAuth = apiSpringAuthInstance();

// 추천 api는?

// 목록 조회
async function isCallPeripheralList(data, success, fail) {
  const params = { pages: data.page };
  await api
    .get(`/peripherals/${data.category}`, { params })
    .then(success)
    .catch(fail);
}

// 후기 작성
async function isCreatePeripheralReview(data, success, fail) {
  const body = {
    peripheralId: data.peripheralId,
    rating: data.rating,
    review: data.review,
  };
  console.log(body);
  await apiAuth
    .post(`/peripherals/${data.category}/review`, body)
    .then(success)
    .catch(fail);
}

// 후기 조회
async function isCallPeripheralReview(data, success, fail) {
  await api
    .get(`/peripherals/${data.category}/${data.peripheralId}/review`)
    .then(success)
    .catch(fail);
}

// 후기 수정
async function isUpdatePeripheralReview(data, success, fail) {
  await apiAuth
    .put(`/peripherals/${data.peripheralId}/review`)
    .then(success)
    .catch(fail);
}

// 후기 삭제
async function isDeletePeripheralReview(data, success, fail) {
  await apiAuth
    .delete(`/peripherals/${data.peripheralId}/review`)
    .then(success)
    .catch(fail);
}

// 제품 저장
async function isSaveMyPeripheral(data, success, fail) {
  await apiAuth
    .post(`/peripherals/${data[0]}/${data[1]}`)
    .then(success)
    .catch(fail);
}

export {
  isCallPeripheralList,
  isCallPeripheralReview,
  isCreatePeripheralReview,
  isDeletePeripheralReview,
  isSaveMyPeripheral,
  isUpdatePeripheralReview,
};
