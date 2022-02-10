// WILL THERE BE ENOUGH SPACE?
function enough(cap, on, wait) {
    return cap > (wait + on) ? 0 : (wait + on) - cap;
} 
