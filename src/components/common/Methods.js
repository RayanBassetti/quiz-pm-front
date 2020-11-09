export const fetching = (url, setState, status) => {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            if(status) {
                console.log("QUESTIONS")
                console.log(url, res.questions)
                setState(res.questions)
            } else {
                console.log("DATA")
                console.log(url, res.data)
                setState(res.data)
            }
        })
        .catch(err => console.log(err))
}