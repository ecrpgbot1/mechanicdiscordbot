function create_updates(update_contents) {
	container = document.getElementById("updates");
	for (let i = 0; i < update_contents.length; i++) {
		update = update_contents[i];

		updateElement = document.createElement('div');
		updateElement.className = 'update';
		updateElement.id = "u_0" + i;

		// Avatar Element
		avatarElement = document.createElement("img");
		avatarElement.setAttribute("src", update["author"]["avatar_url"]);
		avatarElement.className = "avatar";

		// Author Element
		authorElement = document.createElement("div");
		authorElement.className = "author";
		authorElement.appendChild(avatarElement);
		authorElement.appendChild(
			document.createTextNode(update["author"]["name"])
		);

		// Update message element
		updateMessageElement = document.createElement("div");
		updateMessageElement.className = "update-message";
		updateMessage = update["content"];
		lastIndex = 0;
		// Splitting lines in update message
		for (const updateLine of updateMessage.split("\n")) {
			updateMessageElement.appendChild(
				document.createTextNode(updateLine)
			);
			updateMessageElement.appendChild(document.createElement("br"));
		}

		// Adding the elements to the main element.
		updateElement.appendChild(authorElement);
		updateElement.appendChild(updateMessageElement);

		// Adding final element to container.
		container.appendChild(updateElement);

	}
}

function get_updates() {
	url = "https://utsavgurmachhan.com.np/mechanic/updates/";
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			create_updates(data["messages"]);
		});
}

get_updates();
