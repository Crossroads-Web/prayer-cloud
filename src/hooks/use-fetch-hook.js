var [data, error, loading] = [null, false, false]

export const Fetch = async(url, options) =>{
    loading = true;
    let result = "";

    //if url is not provided
    if (!url) {
        return null;
    }

    const response = await fetch(url, options);
    if (response.ok) {
         result = await response.json();
        if (result.error) {
            error = true
        }

        data = result;
        error = false;
    }else{
        error = true;
    }
    loading = false;
    return {data, error, loading};
}