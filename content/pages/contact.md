---
title: Contact
author: Admin
order: 4
---

Use the contact form below to send us a message or simply write us at *support [at] bloggify . org*.

{contact_form}

<script>
(function () {
    var $subject = document.querySelector(".contact-form [name='subject']");
    if ($subject && BloggifyPage.query.subject && !$subject.value) {
        $subject.value = BloggifyPage.query.subject
    }
})()
</script>
