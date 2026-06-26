document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('invocation');
  const resultat = document.getElementById('resultat');
  const message = document.getElementById('message');
  const recommencerBtn = document.getElementById('recommencer');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('clic !');

    const prenom = document.getElementById('prenom').value.trim();
    const creature = document.getElementById('creature').value;
    const texte = `${prenom || 'Ami'}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`;
    message.textContent = texte;

    form.classList.add('cache');
    resultat.classList.remove('cache');

    document.body.classList.add('result-visible');
  });

  recommencerBtn.addEventListener('click', function () {
    form.reset();
    form.classList.remove('cache');
    resultat.classList.add('cache');

    document.body.classList.remove('result-visible');

    document.getElementById('prenom').focus();
  });
});
