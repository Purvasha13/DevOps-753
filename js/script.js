const cardList = [];

const clickMe = () => {
    $('#addCardForm').modal('open');
};

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
        '<div class="card small"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
        '</div><div class="card content">'+
        '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right"></i></span><p><a href="#">'+item.link+'</a></p></div>'+
        '<div class="card-reveal">'+
        '<span class="card-title activator grey-text text-darken-4">'+item.title+
        '<i class="material-icons right">close</i></span>'+
        '<p class="card-text">'+item.description+'</p>'+
        '</div></div></div>';
        $("#card-section").append(itemToAppend);
    });
};

$(document).ready(function() {
        // Fetch and display card details
        $.get('/api/cards', function (cards) {
            var cardSection = $('#card-section');
            cards.forEach(card => {
                var cardHtml = `
                    <div class="col s4 center-align">
                        <div class="card small">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="${card.image}" alt="Card Image">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">${card.title}<i class="material-icons right"></i></span>
                                <p><a href="#">About Me</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title activator grey-text text-darken-4">${card.title}<i class="material-icons right">close</i></span>
                                <p class="card-text">${card.description}</p>
                            </div>
                        </div>
                    </div>`;
                cardSection.append(cardHtml);
            });
        });
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    });
    $('#formSubmit').click(() => {
        submitForm();
    });
    addCards(cardList);
    $('.modal').modal();

    // Event listener for adding card
    $('#addCardForm').submit(function(event) {
        event.preventDefault();
        // submitForm();
    });
});
