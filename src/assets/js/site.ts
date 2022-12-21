const ready = () => {
    const themeSelector = <HTMLInputElement>document.getElementById("theme-selector")
    const getTheme = (): string | null => localStorage.getItem("theme")
    const setTheme = (value: string): void => localStorage.setItem("theme", value)
    const toggleTheme = (): void => {
        if (getTheme() === "light") {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        } else {
            setTheme("light")
            document.documentElement.classList.remove("dark")
        }
    }

    if (themeSelector) {
        const hasDarkThemeSetting =
            getTheme() === "dark" || (getTheme() == null && window.matchMedia("(prefers-color-scheme: dark)").matches)
        if (hasDarkThemeSetting) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

        themeSelector.addEventListener("click", toggleTheme)
    }
}

document.addEventListener("DOMContentLoaded", ready)
