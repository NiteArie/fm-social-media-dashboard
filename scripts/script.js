const app = (() => {
    const _modeSwitcher = document.querySelector(".welcome__toggle-checkbox");
    const _modeSwitcherOutline = document.querySelector(".welcome__toggle-outline");
    const _mediaCards = document.querySelectorAll(".media__card");
    const _overviewCards = document.querySelectorAll(".overview__card");
    const _mediaUsers = document.querySelectorAll(".media__user");
    const _mediaFollowers = document.querySelectorAll(".media__follower");
    const _overviewActions = document.querySelectorAll(".overview__property-title");
    const _welcomeDesc = document.querySelector(".welcome__desc");
    const _overviewTitle = document.querySelector(".overview__title");
    const _modeSwitcherTitle = document.querySelector(".welcome__mode");


    _modeSwitcher.addEventListener("change", (event) => {
        changeBodyTheme();
        changeModeSwitcherTitleColor();
        changeModeSwitcherBackground();
        changeMediaCardsBackground();
        changeOverviewCardsBackground();
        changeMediaUsersColor();
        changeMediaFollowersColor();
        changeOverviewActionsColor();
        changeOverviewTitle();
        changeWelcomeDescColor();
    })

    _modeSwitcher.addEventListener("focus", (event) => {
        showModeSwitcherFocus();
    })

    _modeSwitcher.addEventListener("blur", (event) => {
        hideModeSwitcherFocus();
    })

    function changeModeSwitcherTitleColor() {
        _modeSwitcherTitle.classList.toggle("welcome__mode--dark");
    }

    function showModeSwitcherFocus() {
        _modeSwitcherOutline.classList.add("welcome__toggle-outline--focus");
    }

    function hideModeSwitcherFocus() {
        _modeSwitcherOutline.classList.remove("welcome__toggle-outline--focus");
    }

    function changeBodyTheme() {
        document.body.classList.toggle("body--dark");
    }

    function changeModeSwitcherBackground() {
        _modeSwitcherOutline.classList.toggle("welcome__toggle-outline--dark");
    }

    function changeMediaCardsBackground() {
        Array.from(_mediaCards).forEach(card => card.classList.toggle("media__card--dark"))
    }

    function changeOverviewCardsBackground() {
        Array.from(_overviewCards).forEach(card => card.classList.toggle("overview__card--dark"))
    }

    function changeMediaUsersColor() {
        Array.from(_mediaUsers).forEach(user => user.classList.toggle("media__user--dark"))
    }

    function changeMediaFollowersColor() {
        Array.from(_mediaFollowers).forEach(follower => follower.classList.toggle("media__follower--dark"))
    }

    function changeOverviewActionsColor() {
        Array.from(_overviewActions).forEach(action => action.classList.toggle("overview__property-title--dark"))
    }

    function changeWelcomeDescColor() {
        _welcomeDesc.classList.toggle("welcome__desc--dark");
    }

    function changeOverviewTitle() {
        _overviewTitle.classList.toggle("overview__title--dark");
    }

})();