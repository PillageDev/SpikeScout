import styles from '../../styles/page.module.css'

function DashboardSidebar() {
    let selected = "datasets";
    return (
        <div id={styles.dashboard_sidebar}>
            <button onclick={selected = "datasets"} class={styles.dashboard_sidebar_button}>Datasets</button>
            <button onclick={selected = "options"} class={styles.dashboard_sidebar_button}>Options</button>
            <button onclick={selected = "analytics"} class={styles.dashboard_sidebar_button}>Analytics</button>
        </div>
    )
}

export default DashboardSidebar;