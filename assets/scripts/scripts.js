$(document).ready(function() {
    // Define your quiz questions and choices
    var questions = [
        {
            question: "My favorite activity on the water is:",
            choices: [
                { text: "Sunset Cruise", value: "Serenity" },
                { text: "Swimming", value: "Vitamin Sea" },
                { text: "Dolphin Watching", value: "Natural Wonder" },
                { text: "Fishing", value: "Quality Time" }
            ]
        },
        {
            question: "If I were a drink, I would be:",
            choices: [
                { text: "Lemonade", value: "Inspiration" },
                { text: "Iced Coffee", value: "Adventure" },
                { text: "Margarita", value: "Serenity" },
                { text: "Paloma", value: "Vitamin Sea" }
            ]
        },
        {
            question: "I could spend an entire day on the beach:",
            choices: [
                { text: "Birding", value: "Natural Wonder" },
                { text: "Laying Out", value: "Quality Time" },
                { text: "Sandcastle Building", value: "Inspiration" },
                { text: "Surfing", value: "Adventure" }
            ]
        },
        {
            question: "After a long day at the beach, I like to:",
            choices: [
                { text: "Take a Bath", value: "Serenity" },
                { text: "Have a Beach Bonfire", value: "Vitamin Sea" },
                { text: "Walk Along the Jetty", value: "Natural Wonder" },
                { text: "Have a Family Dinner", value: "Quality Time" }
            ]
        },
        {
            question: "I want to return home from the beach feeling:",
            choices: [
                { text: "A Creative Spark", value: "Inspiration" },
                { text: "Worn Out", value: "Adventure" },
                { text: "Tranquil", value: "Serenity" },
                { text: "Salty & Sandy", value: "Vitamin Sea" }
            ]
        },
        {
            question: "You're boarding a boat! What's the reason?",
            choices: [
                { text: "Seeing Wildlife", value: "Natural Wonder" },
                { text: "Making Family Memories", value: "Quality Time" },
                { text: "For a New Perspective", value: "Inspiration" },
                { text: "To Reel in Dinner", value: "Adventure" }
            ]
        }
    ];

    var userSelections = []; // Array to store user selections
    var currentQuestion = 0;

    // Function to display the current question
    function displayQuestion() {
        $("#question").text(questions[currentQuestion].question);
        $("#question").fadeIn(1000);
        $("#choices").empty();
        for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
            $("#choices").append(`<li class="choice">${questions[currentQuestion].choices[i].text}</li>`); // Access the text property
        }
        $(".choice").each(function(index) {
            $(this).delay(200 * index).fadeIn(500).css({ 'opacity': 0 }).animate({ 'opacity': 1}, 200);
        });
        updateProgressBar();

        // Show or hide the "Previous Question" button based on the current question
        if (currentQuestion > 0) {
            $("#prevQuestion").fadeIn();
        } else {
            $("#prevQuestion").hide();
        }
    }

    // Function to handle user selection and move to the next question
    function handleSelection(selectedIndex) {
        $("#waves").addClass("slide");
        userSelections.push(questions[currentQuestion].choices[selectedIndex]);
        currentQuestion++;
        if (currentQuestion < questions.length) {
            setTimeout(function() {
                $("#waves").removeClass("slide");
                displayQuestion();
            }, 500); // Delay to match the CSS transition duration
        } else {
            setTimeout(function() {
                $("#waves").removeClass("slide");
                displayResults();
            }, 500); // Delay to match the CSS transition duration
        }
    }

    // Function to display quiz results
    function displayResults() {
        $(".quiz-container").hide();
        $(".result-container").fadeIn('slow').addClass('show');
        $("#results").empty();
        $('#prevQuestion').hide();

        // Count occurrences of each value
        var valueCounts = {};
        for (var i = 0; i < userSelections.length; i++) {
            var value = userSelections[i].value;
            if (valueCounts[value]) {
                valueCounts[value]++;
            } else {
                valueCounts[value] = 1;
            }
        }

        // Find the value with the highest count
        var maxValue = "";
        var maxCount = 0;
        for (var key in valueCounts) {
            if (valueCounts[key] > maxCount) {
                maxCount = valueCounts[key];
                maxValue = key;
            }
        }

        $("#waves").addClass("slide");

        if($(window).width() > 767) {
            $('#waves .spininglogo').fadeIn();
        }

        // Display the value with the highest count
        $("#results").text(maxValue);

        // Display the matching paragraph
        var matchingParagraph = "";
        switch (maxValue) {
            case "Serenity":
                matchingParagraph = "And lucky for you, you can find that in excess in Port Aransas.\n\nYou’re in need of a serene retreat to rejuvenate your mind, body, and soul. Every time you add another event to your calendar, you long for an invite to get away from it all. Check out this custom itinerary built with serenity in mind, and consider this your calendar invite for relaxation and renewal.";
                itineraryURL = "https://www.portaransas.org/itineraries/serenity";
                break;
            case "Vitamin Sea":
                matchingParagraph = "And your prescription is some time on the beach. Take often for best results.\n\nFor you, being by the ocean just feels right. You find beauty in small moments like feeling the sea breeze lifting your hair and watching the Gulf tide reaching further toward you. Some rejuvenating time on the beach in Port Aransas will satisfy your soul. Check out this custom Port A itinerary with an extra dose of Vitamin Sea in mind.";
                itineraryURL = "https://www.portaransas.org/itineraries/vitamin-sea/";
                break;
            case "Natural Wonder":
                matchingParagraph = "And lucky for you, natural wonder is in every direction you look in Port Aransas.\n\nYour appreciation for the natural landscape has drawn you to the island life. Picture yourself strolling along the beach to the tune of calming waves, pointing out each dolphin you spot, and keeping your binoculars on hand for spur-of-the-moment birding. You’re seeking a chance to connect with nature on a deeper level, so check out this custom itinerary with Port A’s natural wonder in mind.";
                itineraryURL = "https://www.portaransas.org/itineraries/natural-wonder/";
                break;
            case "Quality Time":
                matchingParagraph = "You’re in luck–quality time happens pretty naturally in Port Aransas.\n\nLeave the hustle and bustle and set aside distractions. You need quality time with those you love most. Curate new family memories with dolphins in the background, the scent of sunscreen in the air, shells in your pockets, and probably some sand between your toes. Get away where you can simply relax together with an island backdrop. Check out this custom itinerary built with quality time in mind and see why traditions anchor here in Port Aransas.";
                itineraryURL = "https://www.portaransas.org/itineraries/quality-time";
                break;
            case "Inspiration":
                matchingParagraph = "You’re seeking a muse, and Port Aransas is the place to ignite your creative spark.\n\nBeing on the beach is great for reflection and creative rejuvenation. Whether you're looking to write, paint, or find a catalyst for new ideas, the peaceful, natural beauty of a Port A beach will stimulate your senses and inspire your mind so you can return home refreshed and inspired. Check out this custom itinerary to guarantee creative inspiration in Port Aransas.";
                itineraryURL = "https://www.portaransas.org/itineraries/inspiration";
                break;
            case "Adventure":
                matchingParagraph = "Look no further because Port Aransas can satisfy your thirst for thrills.\n\nWhy spend your time sitting on a beach blanket when you can be in the action? You can play all day on the beach in Port A. Gear up for kayaking, jet skiing, surfing, paddle boarding, or whatever your go-to blood-pumping beach adventure is. Port Aransas provides the perfect playground for adrenaline junkies like you, so check out this custom itinerary built with you in mind.";
                itineraryURL = "https://www.portaransas.org/itineraries/adventure";
                break;
        }

        // Display the matching paragraph in the results container
        $("#matchingParagraph").html(`<p>${matchingParagraph}</p>`);
        $("#matchingParagraph").append(`<a href="${itineraryURL}" target="_blank" class="ctabtn">Get My Custom Itinerary</a>`);

    }

    // Function to go back to the previous question
    function goToPreviousQuestion() {
        currentQuestion--;
        displayQuestion();
    }

    // Function to update progress bar
    function updateProgressBar() {
        var progress = ((currentQuestion + 1) / questions.length) * 100;
        $("#progressBar").stop().animate({ width: progress + "%" }, 500);
    }

    // Display the first question when the page loads
    displayQuestion();

    // Event listener for clicking on choices
    $("#choices").on("click", "li", function() {
        var selectedIndex = $(this).index();
        handleSelection(selectedIndex);
    });

    // Event listener for clicking on the "Previous Question" button
    $("#prevQuestion").on("click", function() {
        goToPreviousQuestion();
    });
});
