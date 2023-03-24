export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;      
        }

        return await res.json();       
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;      
    }
}


// (async () => {
//     const body = await getApiResourse(HRAPI_ROOT+HRAPI_STUDENTS);
//     console.log(body);
// })();