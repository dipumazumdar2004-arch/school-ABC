/**
 * SchoolERP-Pro Charts Configurations
 * Implements high-end analytics rendering using Chart.js.
 */

// Draw academic performance indicators charts
function initPerformanceChart(canvasId, dataLabels, datasetsArray) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return null;

    // Resolve active theme styling tokens
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#cbd5e1' : '#475569';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)';

    // Verify Chart.js is imported in root scope
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js library is not imported. Rendering placeholder.');
        ctx.parentNode.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--text-muted);"><i class="fa-light fa-chart-line" style="font-size: 2.5rem; margin-bottom: 12px; display: block;"></i>Charts library loading...</div>';
        return null;
    }

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dataLabels,
            datasets: datasetsArray
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: textColor,
                        font: {
                            family: "'Inter', sans-serif",
                            weight: '600'
                        }
                    }
                },
                tooltip: {
                    padding: 12,
                    borderRadius: 8,
                    bodyFont: {
                        family: "'Inter', sans-serif"
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: gridColor
                    },
                    ticks: {
                        color: textColor,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    }
                },
                y: {
                    grid: {
                        color: gridColor
                    },
                    ticks: {
                        color: textColor,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
