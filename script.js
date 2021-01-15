function changeThemesHub() {
    var x = document.getElementsByTagName("body")[0];
    if (x.id == "LightModeHub") {
        x.id = "DarkModeHub";
        document.getElementById("themeButtonHub").innerHTML = "Currently in: Dark Mode";
    } else if (x.id == "DarkModeHub") {
        x.id = "LightModeHub"
        document.getElementById("themeButtonHub").innerHTML = "Currently in: Light Mode";
    }
}

function changeThemesKoteg() {
    var x = document.getElementsByTagName("body")[0];
    if (x.id == "LightModeKoteg") {
        x.id = "DarkModeKoteg";
        document.getElementById("StoryLight").id = "StoryDark";
        document.getElementById("themeButtonKoteg").innerHTML = "Currently in: Dark Mode";
    } else if (x.id == "DarkModeKoteg") {
        x.id = "LightModeKoteg"
        document.getElementById("StoryDark").id = "StoryLight";
        document.getElementById("themeButtonKoteg").innerHTML = "Currently in: Light Mode";
    }
}

function changeThemesStatue() {
    var x = document.getElementsByTagName("body")[0];
    if (x.id == "LightModeStatue") {
        x.id = "DarkModeStatue";
        document.getElementById("blm_light").id = "blm_dark";
        document.getElementById("themeButtonStatue").innerHTML = "Currently in: Dark Mode";
    } else if (x.id == "DarkModeStatue") {
        x.id = "LightModeStatue"
        document.getElementById("blm_dark").id = "blm_light";
        document.getElementById("themeButtonStatue").innerHTML = "Currently in: Light Mode";
    }
}