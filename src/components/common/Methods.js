export const fetching = (url, setState, setLoading) => {
    
    async function API(url) {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }

    API(url).then(res => {
            res.questions ? setState(res.questions) : setState(res.scores)
            setLoading(false)
        })
        .catch(err => console.log(err))
}

