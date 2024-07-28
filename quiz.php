<?php require('header.php');?>

	<div class="progress-container">
        <div class="progress-bar" id="progressBar"></div>
    </div>

	<div id="quiz_container">

		<h1>Find What You Need</h1>

		<div class="quiz-container">
	        <h2 id="question"></h2>
	        <ul id="choices"></ul>
	    </div>

	    <div class="result-container">
	        <p class="heading">Looks like you need</p>
	        <h2 id="results"></h2>
	        <div id="matchingParagraph"></div>

	        <a href="/" class="retake">Retake Quiz</a>

	        <a href="https://portaransas.org" target="_blank" class="spininglogo">
				<img src="/assets/images/badge.gif" alt="Port Aransas logo">
			</a>

	    </div>

	</div><!-- #quiz_container -->

	<button id="prevQuestion" style="display: none;"><span class="arrow">&#x21bb;</span> Previous Question</button>

    <div id="waves">
    	<div class="lightblue"></div>
    	<div class="blue"></div>
    	<div class="darkblue"></div>

        <a href="https://portaransas.org" target="_blank" class="spininglogo">
			<img src="/assets/images/badge.gif" alt="Port Aransas logo">
		</a>
    </div>

</body>
</html>
