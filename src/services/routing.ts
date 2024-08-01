import { useRouter } from "vue-router"
export const routingService = () => {
    const router = useRouter()

    function toHome() {
        return router.push({name: 'home'})
    }

    function toCases() {
        return router.push({name: 'cases'})
    }

    function toProjects() {
        return router.push({name: 'projects'})
    }

    function toProject(projectId: number) {
        return router.push({name: 'project', params:{ projectId }})
    }

    function toForm() {
        return router.push('/#contact')
    }

    function toAboutUs() {
        return router.push('/#aboutus')
    }

    function toError() {
        return router.push({name: 'Error'})
    }

    return {
        toHome,
        toCases,
        toProjects,
        toProject,
        toForm,
        toAboutUs,
        toError
    }
}