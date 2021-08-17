const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerText = "0"

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target")
        const x = +counter.innerText
        const inc = target / 200

        if(x < target){
            counter.innerText = `${Math.ceil(x + inc)}`
            setTimeout(updateCounter, 1)
        }
        else{
            counter.innerText = target
        }
    }

    updateCounter()
})