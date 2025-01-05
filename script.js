document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const startButton = document.getElementById('startDemo');
    const deviceSelect = document.getElementById('deviceSelect');
    const hideIp = document.getElementById('hideIp');
    const enableEncryption = document.getElementById('enableEncryption');

    const typeWriter = (text, speed = 50) => {
        return new Promise(resolve => {
            let i = 0;
            function type() {
                if (i < text.length) {
                    output.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    output.innerHTML += '<br>';
                    resolve();
                }
            }
            type();
        });
    };

    const fakeIPs = [
        '192.168.1.1',
        '10.0.0.1',
        '172.16.0.1',
        '8.8.8.8',
    ];

    const getRandomIP = () => {
        return fakeIPs[Math.floor(Math.random() * fakeIPs.length)];
    };

    const simulateProcess = async () => {
        output.innerHTML = '';
        
        // Initial system check
        await typeWriter('> Initializing system...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await typeWriter(`> Selected device: ${deviceSelect.value.toUpperCase()}`);
        await new Promise(resolve => setTimeout(resolve, 800));
        
        if (hideIp.checked) {
            await typeWriter('> Activating IP masking...');
            await new Promise(resolve => setTimeout(resolve, 1000));
            await typeWriter(`> Routing through proxy: ${getRandomIP()}`);
            await new Promise(resolve => setTimeout(resolve, 800));
        }
        
        if (enableEncryption.checked) {
            await typeWriter('> Enabling AES-256 encryption...');
            await new Promise(resolve => setTimeout(resolve, 1000));
            await typeWriter('> Generating secure tunnel...');
            await new Promise(resolve => setTimeout(resolve, 800));
        }

        // Main process simulation
        await typeWriter('> Starting security analysis...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        await typeWriter('> ⚠️ WARNING: This is just a demonstration');
        await typeWriter('> No actual hacking or account access occurs');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await typeWriter('> Demonstration complete');
        await typeWriter('> Remember: Protect your privacy and report suspicious activities');
        
        startButton.disabled = false;
    };

    startButton.addEventListener('click', () => {
        startButton.disabled = true;
        simulateProcess();
    });

    // Add hover effects for terminal
    const terminal = document.querySelector('.terminal');
    terminal.addEventListener('mousemove', (e) => {
        const rect = terminal.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        terminal.style.setProperty('--x', `${x}px`);
        terminal.style.setProperty('--y', `${y}px`);
    });
});
