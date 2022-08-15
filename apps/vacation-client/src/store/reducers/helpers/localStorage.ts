export function setTokenLS(token: string) {
    if (!token) return;
    localStorage.setItem("token", token)
}

export function clearTokenLS(token: string) {   //logout
    if (!token) return;
    localStorage.removeItem("token")
}

export function getTokenLS() {
    return localStorage.getItem("token")
}