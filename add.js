'use strict';

import { postFilme } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const filme = {
            photo: formData.get('photo'),
            title: formData.get('title'),
            genre: formData.get('genre'),
            release_year: formData.get('release_year'),
            director: formData.get('director'),
            description: formData.get('description')
        };

        try {
            const success = await postFilme(filme);
            if (success) {
                alert('Filme cadastrado com sucesso!');
                // Você pode adicionar qualquer ação adicional após o cadastro bem-sucedido, como redirecionar para outra página.
            } else {
                alert('Erro ao cadastrar o filme. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar o filme:', error);
            alert('Erro ao cadastrar o filme. Por favor, tente novamente.');
        }
    });
});
