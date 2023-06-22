$(document).ready(function () {
    function defaults() {
        $("#mainCommentBox").empty();
        let localComments = JSON.parse(localStorage.getItem("comments"));
        if (localComments != null || localComments != undefined) {
            $.map(localComments, function (i) {
                $("#mainCommentBox").append(`<div class="mt-3" id="main">
                <form class=" m-auto border border-1 p-3 rounded-2 bg-white" id ="commentedForm">
                    <div class="mb-3">
                        <label for="commentsField" class="form-label" id="commentsArea${i.id}" >comments,</label>
                        <div id="childComment"></div>
                        <textarea class="form-control" id="textArea${i.id}" placeholder="Required example textarea"
                           required ></textarea>
                    </div>
                    <div class="mb-0 text-end"">
                        <button class="btn btn-primary replyChild" id="Q${i.id}" type="button">Reply</button>
                    </div>
                </form>
            </div>`);
                $.map(i.inputComments, function (cmt) {
                    $(`#commentsArea${i.id}`).append(`<p class="ps-2">${cmt}</p>`);
                });
            });
        }
    }
    defaults();
    $("#commenting").click(function () {
        let inputComments = $("#commentsField").val();
        if (inputComments.length) {
            let localComments = JSON.parse(localStorage.getItem("comments"));
            let id;
            if (localComments == null || localComments == undefined) {
                id = 1;
                localStorage.setItem("comments", JSON.stringify([{ id, "inputComments": [inputComments] }]));
                defaults();
            } else {
                id = (localComments.length) + 1;
                localComments.push({ id, "inputComments": [inputComments] });
                localStorage.setItem("comments", JSON.stringify(localComments));
                defaults();
            }
        }
    });
    $(".replyChild").mousedown(function () {
        var id = $(this).attr('id');
        let targetId = $(`#textArea${id.substr(1)}`).val();
        if (targetId.length) {
            let localComments = JSON.parse(localStorage.getItem("comments"));
            localComments[`${id.substr(1)}` - 1].inputComments.push(targetId);
            localStorage.removeItem("comments");
            localStorage.setItem("comments", JSON.stringify(localComments));
            defaults();
        }
    });
});



