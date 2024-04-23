import VMasker from 'vanilla-masker';

export const useMask = () => {
    function getAllInputsMask() {
        var inputs = document.querySelectorAll('input[data-mask]');
        
        inputs.forEach(function(input) {
            const mask = input.getAttribute('data-mask');

            if (mask) {
                VMasker(input).maskPattern(mask);
            }
        });
    }

    return {
        getAllInputsMask,
    };
}