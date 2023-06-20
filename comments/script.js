$(document).ready(function () {

    function defaults() {
        $("#mainCommentBox").empty();
        let localComments = JSON.parse(localStorage.getItem("comments"));
        if (localComments != null || localComments != undefined) {

            $.map(localComments, function (i) {
                // console.log(localComments);
                // console.log(i.id);
                // $("#commentedForm").remove();
                $("#mainCommentBox").append(`<div class="mt-3" id="main">
                <form class=" m-auto border border-1 p-3 rounded-2 bg-white" id ="commentedForm">
                    <div class="mb-3">
                        <label for="commentsField" class="form-label" id="commentsArea${i.id}" >comments,</label>
                        <div id="childComment"></div>
                        <textarea class="form-control" id="textArea${i.id}" placeholder="Required example textarea"
                            ></textarea>
                    </div>
                    <div class="mb-0 text-end"">
                        <button class="btn btn-primary replyChild" id="Q${i.id}" type="button">Reply</button>
                    </div>
                </form>
            </div>`);
                $.map(i.inputComments, function (cmt) {
                    // console.log(cmt);
                    $(`#commentsArea${i.id}`).after(`<p class="bg-secondary ps-2">${cmt}</p>`);
                });
            });

        }
    }
    defaults();


    $("#commenting").click(function () {
        console.log("commenting");
        let inputComments = $("#commentsField").val();
        if (inputComments.length) {
            // console.log("if");
            let localComments = JSON.parse(localStorage.getItem("comments"));
            let id;
            if (localComments == null || localComments == undefined) {
                id = 1;
                localStorage.setItem("comments", JSON.stringify([{ id, "inputComments": [inputComments] }]));
                defaults();
            } else {
                id = (localComments.length) + 1;
                // console.log("else");
                localComments.push({ id, "inputComments": [inputComments] });
                localStorage.setItem("comments", JSON.stringify(localComments));
                console.log(id, localComments.length);
                defaults();
            }
        }

    });

    $(".replyChild").click(function () {
        var id = $(this).attr('id');
        let targetId = $(`#textArea${id.substr(1)}`).val();
        console.log(`${id.substr(1)}`);
        let localComments = JSON.parse(localStorage.getItem("comments"));
        // let foundId = localComments[`${id.substr(1)}`];
        console.log(localComments);
        // defaults();
        console.log(localComments[`${id.substr(1)}` - 1].inputComments);
        localComments[`${id.substr(1)}` - 1].inputComments = localComments[`${id.substr(1)}` - 1].inputComments.push(targetId);
        console.log(localComments[`${id.substr(1)}` - 1].inputComments);
        // localStorage.setItem("comments", JSON.stringify(localComments));
        // localStorage.setItem("comments", JSON.stringify());
        // defaults();
        // console.log(targetId);
        // $(`#commentsArea${id.substr(1)}`).after(`<p class="bg-secondary ps-2">${targetId}</p>`);
    });

    // function setComments(localComments) {
    //     console.log(localComments.length);
    //     for (let i = 0; i <= localComments.length - 1; i++) {
    //         console.log(localComments[i].inputImageLink);

    //         const rowDiv = document.createElement("p");
    //         const child = document.createTextNode(localComments[i].inputComments);
    //         rowDiv.appendChild(child);
    //         rowDiv.setAttribute("class", "text-dark bg-light my-3 rounded-2 pb-5 pt-1");
    //         document.getElementById("toPrintCommentBox").after(rowDiv);
    //     }
    // }
    // $("commenting").click(function (e) {
    //     let inputComments = document.getElementById('commentsField').value;
    //     let inputImageLink = document.getElementById('links').value;
    //     if ($("#lastNameError").length == 0) {
    //         console.log($("#firstNameError").length);
    //         $("#lastName").after("<p id='lastNameError'>minimum 3 letters needed</p>");
    //     }
    //     if (inputComments.length > 0 && inputImageLink.length > 0) {
    //         let localComments = JSON.parse(localStorage.getItem("comments"));
    //         let id;
    //         if (localComments == null || localComments == undefined) {
    //             id = 1;
    //             localStorage.setItem("comments", JSON.stringify([{ id, inputComments, inputImageLink }]));
    //         } else {
    //             id = (localComments.length) + 1;
    //             localComments.push({ id, inputComments, inputImageLink });
    //             localStorage.setItem("comments", JSON.stringify(localComments));
    //             console.log(id, localComments.length);
    //         }
    //     }
    // });


});



