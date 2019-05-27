var intIssueId = 0;

function openModal() {
    var taskModal = document.getElementById('divModal');
    taskModal.style.display = "block";
    clearModalFields();
}

function clearModalFields() {

    var txtIssutTitle = document.getElementById('txtIssueTitle');
    txtIssutTitle.value = '';
    onTitleChange(txtIssutTitle);
}

function closeModal() {
    var taskModal = document.getElementById('divModal');
    taskModal.style.display = "none";
}

function saveCloseTask() {

    var taskModal = document.getElementById('divModal');
    var liSaveClose = document.getElementById("liSaveClose");
    if (liSaveClose.classList.contains('disabled')) {
        return;
    }
    taskModal.style.display = "none";

    var tdParent = document.getElementById('tdParent');
    console.log(tdParent);
    if (tdParent) {

        var txtIssutTitle = document.getElementById('txtIssueTitle');
        txtIssutTitle.value;
        intIssueId += 1;
        console.log(intIssueId);
        var parseStr = strNewCard.replace('{0}', intIssueId.toString());
        parseStr = parseStr.replace('{1}', txtIssutTitle.value);
        tdParent.innerHTML += parseStr;
    }
}

function onTitleChange(txt) {

    var liSaveClose = document.getElementById("liSaveClose");

    if (liSaveClose) {

        if (txt.value != '') {
            if (liSaveClose.classList.contains('disabled')) {
                liSaveClose.classList.remove('disabled');
            }
        } else {
            if (!liSaveClose.classList.contains('disabled')) {
                liSaveClose.classList.add('disabled');
            }
        }
    }

}

function onDrag(event) {

    event.dataTransfer.setData("issue", event.target.id);
}

function onDrop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("issue");
    console.log(data);
    event.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
    ev.preventDefault();
}

var strNewCard = "<div draggable='true' ondragstart='onDrag(event)' id='issue{0}' class='tbTile ui-draggable ui-draggable-handle parentTbTile' style='border-left-color: rgb(51, 153, 71);'> " +
    "	<div class='tbTileContent' style='border-color: rgb(200, 200, 200);'> " +
    "		<div class='id-title-container'> " +
    "			<span class='work-item-type-icon-host'> " +
    "              <div class='ms-TooltipHost host_3e21a177 work-item-type-icon-wrapper'> " +
    "                  <i aria-label='Issue' class='work-item-type-icon bowtie-icon bowtie-symbol-issue' style='color: rgb(51, 153, 71);'></i> " +
    "              </div> " +
    "           </span> " +
    "       	<div class='id'></div> " +
    "           <div class='title ellipsis clickable-title'> " +
    "               <label> {1} </label> " +
    "           </div> " +
    "        </div> " +
    "        <div class='container witExtra'> " +
    "            <div class='field-container onTileEditDiv non-combo-behavior ellipsis  effort witRemainingWork'> </div> " +
    "            <div class='field-container onTileEditDiv non-combo-behavior ellipsis identity' > " +
    "                <div class='field-inner-element ellipsis onTileEditTextDiv unassigned'> " +
    "                    <div id='vss_577'> " +
    "                        <span class='identity-picker-display element-height-medium' data-signin='string_entityid_unassigned'> " +
    "							<img src='assets/img/notassigned-user.svg' " +
    "                                draggable='false' " +
    "                                class='user-picture-resolved element-2d-medium' " +
    "                                data-objectid='STRING_ENTITYID_Unassigned' " +
    "                                style='background: none 0% 0% / 100% no-repeat;'><span " +
    "                                class='identity-picker-resolved-name'>Unassigned</span></span> " +
    "                    </div> " +
    "                </div> " +
    "            </div> " +
    "        </div> " +
    "        <div class='field-container onTileEditDiv non-combo-behavior ellipsis  additional-field lastAdditionalField'> " +
    "            <div class='field-label ellipsis'> State </div> " +
    "            <div class='field-inner-element ellipsis onTileEditTextDiv'> " +
    "                <div class='workitem-state-color-cell onTileEditTextDiv'> " +
    "                    <span class='workitem-state-circle onTileEditTextDiv' style='background-color: rgb(178, 178, 178); border-color: rgb(178, 178, 178);'> " +
    "					 </span> " +
    "					 <span class='workitem-state-value onTileEditTextDiv'>To Do " +
    "					 </span> " +
    "                </div> " +
    "            </div> " +
    "        </div> " +
    "        <div class='card-context-menu'> " +
    "            <div class='bowtie-icon bowtie-ellipsis'> " +
    "            </div> " +
    "        </div> " +
    "   </div> " +
    "</div> ";