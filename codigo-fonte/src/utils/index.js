export function toggleClasse(elemento, classe) {
	if (elemento.classList.contains(classe)) {
		elemento.classList.remove(classe);
	} else {
		elemento.classList.add(classe);
	}
}