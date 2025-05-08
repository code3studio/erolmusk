document.addEventListener("DOMContentLoaded", function () {
    const erol = document.getElementById("ticket_erol");
    const erolMusk = document.getElementById("ticket_erol_musk");
    const ticket_no = document.getElementById("ticket_no");

    /* const arenaOGs = document.getElementById("badge_ogs");
    const arenaChampions = document.getElementById("badge_champions");
    const nochill = document.getElementById("badge_nochill");
    const nochillio = document.getElementById("badge_nochillio");
    const noBadge = document.getElementById("badge_no"); */

    const other_Input = document.getElementById("otherInput");
    const otherDescriptionInput = other_Input.querySelector('input[name="other_description"]');

    // Ticket seçim fonksiyonları
    function handleTicketSelection() {
        if (ticket_no.checked) {
            erol.checked = false;
            erolMusk.checked = false;
        }
    }

    function resetNoTicket() {
        if (erol.checked || erolMusk.checked) {
            ticket_no.checked = false;
        }
    }

    [erol, erolMusk].forEach(ticket => ticket.addEventListener("change", resetNoTicket));
    ticket_no.addEventListener("change", handleTicketSelection);

    document.getElementById('ticket_no').addEventListener('change', function () {
        let ticketErol = document.getElementById('ticket_erol');
        let ticketErolMusk = document.getElementById('ticket_erol_musk');
        
        if (this.checked) {
            ticketErol.required = false;
            ticketErolMusk.required = false;
        } else {
            ticketErol.required = true;
            ticketErolMusk.required = true;
        }
    });

    // Eğer "Erol" veya "Erol Musk" seçilirse, "I don't have it" seçeneğini iptal et
    document.getElementById('ticket_erol').addEventListener('change', function () {
        if (this.checked || document.getElementById('ticket_erol_musk').checked) {
            document.getElementById('ticket_no').checked = false;
        }
        updateRequiredFields(); // Güncel durumu kontrol et
    });

    document.getElementById('ticket_erol_musk').addEventListener('change', function () {
        if (this.checked || document.getElementById('ticket_erol').checked) {
            document.getElementById('ticket_no').checked = false;
        }
        updateRequiredFields(); // Güncel durumu kontrol et
    });

    // Required alanları güncelleyen fonksiyon
    function updateRequiredFields() {
        let ticketErol = document.getElementById('ticket_erol');
        let ticketErolMusk = document.getElementById('ticket_erol_musk');
        let ticketNo = document.getElementById('ticket_no');

        if (ticketNo.checked || ticketErol.checked || ticketErolMusk.checked) {
            ticketErol.required = false;
            ticketErolMusk.required = false;
        } else {
            ticketErol.required = true;
            ticketErolMusk.required = true;
        }
    }

    // Badge kontrol fonksiyonları
    /* const checkboxes = document.querySelectorAll('input[name="badge[]"]');

    function updateRequiredFieldsBadge() {
        let anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        checkboxes.forEach(checkbox => {
            checkbox.required = !anyChecked; // Eğer hiçbir şey seçilmemişse required ekle
        });
    }

    // "I don't have it" seçildiğinde diğerleri sıfırlansın ve required kalksın
    noBadge.addEventListener("change", function () {
        if (this.checked) {
            checkboxes.forEach(checkbox => {
                if (checkbox !== noBadge) {
                    checkbox.checked = false;
                }
            });
        }
        updateRequiredFieldsBadge();
    });

    // Diğer seçeneklerden biri değiştiğinde
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            if (this !== noBadge && this.checked) {
                noBadge.checked = false; // Eğer başka bir şey seçildiyse "I don't have it" iptal olsun
            }
            updateRequiredFieldsBadge();
        });
    });

    // İlk açılışta kontrol et
    updateRequiredFieldsBadge(); */

    // "Other" description input göster/gizle
    const otherInput = document.getElementById("otherInput");
    document.querySelectorAll('input[name="description"]').forEach(input => {
        input.addEventListener('change', function () {
            if (this.value === 'other') {
                otherInput.style.display = 'block';
                otherDescriptionInput.required = true;
            } else {
                otherInput.style.display = 'none';
                otherDescriptionInput.required = false;
            }
        });
    });

    // "Arena Member" seçeneğine göre ticket sorusunu göster/gizle
    /* document.querySelectorAll('input[name="arena_member"]').forEach(input => {
        input.addEventListener('change', function () {
            document.getElementById('ticketQuestion').style.display = (this.value === 'yes') ? 'block' : 'none';
        });
    }); */

    // Badge seçim fonksiyonları
    /* function updateBadgeSelection() {
        if (noBadge.checked) {
            [arenaOGs, arenaChampions, nochill, nochillio].forEach(badge => badge.checked = false);
        }
    }

    function resetNoBadge() {
        if ([arenaOGs, arenaChampions, nochill, nochillio].some(badge => badge.checked)) {
            noBadge.checked = false;
        }
    }

    function enforceNochillExclusive() {
        if (this.checked) {
            if (this.id === "badge_nochill") nochillio.checked = false;
            if (this.id === "badge_nochillio") nochill.checked = false;
        }
    }

    [arenaOGs, arenaChampions, nochill, nochillio].forEach(badge => badge.addEventListener("change", resetNoBadge));
    [nochill, nochillio].forEach(badge => badge.addEventListener("change", enforceNochillExclusive));
    noBadge.addEventListener("change", updateBadgeSelection); */
});