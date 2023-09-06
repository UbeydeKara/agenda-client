export const clickAway = (containerId: string, callback: () => any) => {
    window.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;

        if (document.getElementById(containerId)?.contains(target)) {
            return;
        }

        callback();
    })
}
