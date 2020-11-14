export const fetching = (url, setState, setLoading) => {
    
    async function API(url) {
        const res = await fetch(url)
        const data = await res.json()
        console.log("ASYNC" + url, data)
        return data
    }

    API(url).then(res => {
        console.log("THEN" + url, res)
            setState(res.questions)
            setLoading(false)
        })
        .catch(err => console.log(err))
}

