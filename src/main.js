class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'wellington.azevedo@outlook.com',
            description: 'Foco força e fé',
            avatar_url: 'https://avatars3.githubusercontent.com/u/5393180?v=4',
            html_url: 'https://avatars3.githubusercontent.com/u/5393180?v=4'
        });

        console.log(this.repositories);
    }
}

new App();