// 미들웨어 기능별 함수들
function getProducts(searchQuery){

    return async(dispatch, getState) => {
        let url = `http://localhost:5001/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("데이타 확인?  ",data);
        dispatch({type : "GET_PRODUCT_SUCCESS", payload : { data } })
    };


}

function getProductDetail({id}){

    return async(dispatch, getState) => {
    let url = `http://localhost:5001/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("디테일데이터 확인?",data);
    dispatch({type : "PRODUCT_DETAIL", payload : { data } })
    };
}

export const productAction={getProducts, getProductDetail};