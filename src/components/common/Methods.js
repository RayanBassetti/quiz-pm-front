export const fetching = (setLoading, url, setState) => {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(url, res)
            if(res.questions) {
                setState(res.questions)
                setLoading(false)
            } else if(res.scores){
                setState(res.scores)
                setLoading(false)
            } else if(res.data) {
                console.log(res.data)
                setState(res.data)
            }
        })
        .catch(err => console.log(err))
}