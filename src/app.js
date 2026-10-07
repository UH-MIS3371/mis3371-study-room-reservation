const STUDY_ROOM_CAPACITY = 6;

function fitsRoomCapacity(partySize) {
  return partySize <= STUDY_ROOM_CAPACITY;
}

const partySizeInput = document.querySelector("#partySize");
const capacityMessage = document.querySelector("#capacityMessage");

partySizeInput.addEventListener("input", () => {
  const rawPartySize = partySizeInput.value.trim();

  if (rawPartySize === "") {
    capacityMessage.textContent = "";
    capacityMessage.className = "capacity-message";
    return;
  }

  const partySize = Number(rawPartySize);
  const roomFits = fitsRoomCapacity(partySize);

  capacityMessage.textContent = roomFits
    ? "This group fits the selected study room."
    : "This group exceeds the study room capacity of 6.";
  capacityMessage.className = roomFits
    ? "capacity-message capacity-message--success"
    : "capacity-message capacity-message--error";
});
