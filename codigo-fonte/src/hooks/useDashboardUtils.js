import { useAuthentication } from '/src/hooks/useAuthentication.js';
import { useMask } from './useMask';

export const useDashboardUtils = () => {
    function startLogoutFuncionality() {
        const { sigOut } = useAuthentication();

        const logoutButton = document.querySelector('.logout');

        if (logoutButton) {
            logoutButton.addEventListener('click', (event) => {
                event.preventDefault();

                sigOut();

                window.location.reload();
            })
        }
    }

    function startAuthenticatedFuncionalities() {
        const { getUSerData } = useAuthentication();
        const name = document.querySelector('.auth-username');
        const image = document.querySelector('.auth-image');
        const userData = getUSerData();
        const linkschildren = document.querySelectorAll('.sidebar-link');
        const linksParent = document.querySelectorAll('.dashboard-layout-sidebar-menu-item');

        linksParent.forEach((elemento) => {
            const role = elemento.getAttribute('role');

            if (!role.includes(userData.role)) {
                elemento.classList.add('hidden');
            }
        });

        linkschildren.forEach((elemento) => {
            const role = elemento.getAttribute('role');

            if (!role.includes(userData.role)) {
                elemento.classList.add('hidden');
            }
        });

        if (Object.keys(userData).length) {
            name.innerText = userData.name;
            image.setAttribute('src', userData.image);
        }
    }

    function startSidebarMenuState() {
        const sidebarElement = document.querySelector('.dashboard-layout-sidebar');
        const contentElement = document.querySelector('.dashboard-layout-content');
        const togglerElement = document.querySelector('.sidebar-toggler');
        

        if (sidebarElement && togglerElement) {
            togglerElement.addEventListener('click', (event) => {
                event.preventDefault();

                sidebarElement.classList.toggle('opened');
                contentElement.classList.toggle('opened');

                const sidebarState = sidebarElement.classList.contains('opened') ? 'open' : 'closed';
                localStorage.setItem('sidebarState', sidebarState);
            });

            const savedSidebarState = localStorage.getItem('sidebarState');

            if (savedSidebarState === 'open') {
                sidebarElement.classList.add('opened');
                contentElement.classList.add('opened');
            }
        }
    }

    function startDropdownListState() {
        const parents = document.querySelectorAll('.dashboard-layout-sidebar-menu-parent');

        parents.forEach((parent, index) => {
            const listId = `menu-${index}`;
            let isOpen = localStorage.getItem(listId) === 'open';

            const toggleList = () => {
                const listNode = parent.parentNode.querySelector('.dashboard-layout-sidebar-menu-children ul');

                if (listNode) {
                    const iconNode = parent.querySelector('.dropdown-icon');
                    const totalHeight = Array.from((listNode.querySelectorAll('li') || [])).reduce((acc, el) => {
                        const height = parseFloat(window.getComputedStyle(el).height);
                        return acc + height;
                    }, 0);

                    parent.classList.toggle('opened');
                    iconNode.classList.toggle('rotate-180');
                    listNode.style.maxHeight = isOpen ? `${totalHeight}px` : '0';
                    localStorage.setItem(listId, isOpen ? 'open' : 'closed');
                }
            };

            if (isOpen) {
                toggleList();
            }

            parent.addEventListener('click', (event) => {
                event.stopImmediatePropagation();

                isOpen = !isOpen;

                toggleList();
            })
        });
    }

    function showNotification(notificationOptions) {
        
        if (!notificationOptions || typeof notificationOptions !== 'object') {
            console.error('showNotification: Objeto de opções inválido.');
            return;
        }
    
        const { title, message, type = 'success', duration = 6000 } = notificationOptions;
    
        
        if (!title || !message) {
            console.error('showNotification: Parâmetros incompletos.');
            return;
        }
    
        const notificationContainer = document.createElement('div');
        notificationContainer.classList.add('notification');
        notificationContainer.classList.add('slide-in'); 
    
        const notificationTitle = document.createElement('span');
        notificationTitle.classList.add('notification-title');
        notificationTitle.textContent = `${title}`;
        notificationContainer.appendChild(notificationTitle);

        const notificationContent = document.createElement('span');
        notificationContent.classList.add('notification-content');
        notificationContent.textContent = `${message}`;
        notificationContainer.appendChild(notificationContent);
    
        
        if (type === 'success' || type === 'error' || type === 'warning' || type === 'info' || type === 'primary') {
            notificationContainer.classList.add(type);
        } else {
            console.error('showNotification: Tipo de notificação inválido.');
            return;
        }
    
        document.body.appendChild(notificationContainer);
    
        setTimeout(() => {
            notificationContainer.classList.remove('slide-in'); 
            notificationContainer.classList.add('slide-out'); 
    
            setTimeout(() => {
                notificationContainer.remove();
            }, 500); 
        }, duration);
    }


    function starstartDashboardModule() {
        const { getAllInputsMask } = useMask();
        startSidebarMenuState();
        startDropdownListState();
        startLogoutFuncionality();
        startAuthenticatedFuncionalities();
        getAllInputsMask();
    }

    return {
        starstartDashboardModule,
        showNotification,
    };
};