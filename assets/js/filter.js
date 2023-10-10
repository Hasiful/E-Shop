document.addEventListener("DOMContentLoaded", function () {
    const filterBlocks = document.querySelectorAll('.filter_sidebar_block');

    filterBlocks.forEach(function (block) {
        const checkboxes = block.querySelectorAll('.checkbox--tqPns');
        const loadMoreButton = block.querySelector('.load-more-button');
        let itemsToShow = 5;

        function toggleCheckboxesVisibility() {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].style.display = (i < itemsToShow) ? 'block' : 'none';
            }
        }

        loadMoreButton.addEventListener('click', function () {
            if (itemsToShow === 5) {
                itemsToShow = checkboxes.length;
                loadMoreButton.innerText = 'Show Less';
            } else {
                itemsToShow = 5;
                loadMoreButton.innerText = 'Load More';
            }
            toggleCheckboxesVisibility();
        });

        if (checkboxes.length > itemsToShow) {
            toggleCheckboxesVisibility();
        } else {
            loadMoreButton.style.display = 'none';
        }
    });
});