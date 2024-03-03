import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import avatar from "../assets/profile.png";

const steps = [
    {
        id: '0',
        message: 'Hello there! Its R3VIVE Bot!',
        trigger: '1',
    },
    {
        id: '1',
        message: 'Before we begin, could you please provide your name?',
        trigger: '2'
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: "Hi {previousValue}, how can we assist you today?",
        trigger: '4'
    },
    {
        id: '4',
        options: [
            { value: 'sustainability_initiatives', label: 'Learn about Sustainability Initiatives', trigger: 'sustainability_initiatives' },
            { value: 'waste_management_tips', label: 'Get Waste Management Tips', trigger: 'waste_management_tips' },
            { value: 'contact_human', label: 'I need to speak with a human', trigger: 'contact_human' }
        ]
    },
    {
        id: 'sustainability_initiatives',
        message: 'We have various sustainability initiatives in place, including:\n1. Recycling programs\n2. Renewable energy adoption\n3. Water conservation efforts\n4. Sustainable sourcing practices\nWhich initiative would you like to learn more about?',
        trigger: 'sustainability_initiatives_choice'
    },
    {
        id: 'sustainability_initiatives_choice',
        options: [
            { value: 'recycling_programs', label: 'Recycling Programs', trigger: 'recycling_programs_info' },
            { value: 'renewable_energy', label: 'Renewable Energy Adoption', trigger: 'renewable_energy_info' },
            { value: 'water_conservation', label: 'Water Conservation Efforts', trigger: 'water_conservation_info' },
            { value: 'sustainable_sourcing', label: 'Sustainable Sourcing Practices', trigger: 'sustainable_sourcing_info' },
            { value: 'back_to_main_menu', label: 'Back to Main Menu', trigger: '4' }
        ]
    },
    {
        id: 'recycling_programs_info',
        message: 'Our recycling programs focus on segregating waste at source, promoting the use of recycled materials, and raising awareness about responsible disposal methods. How else can we assist you?',
        trigger: '4'
    },
    {
        id: 'renewable_energy_info',
        message: 'We are committed to transitioning to renewable energy sources such as solar and wind power to reduce our carbon footprint. How else can we assist you?',
        trigger: '4'
    },
    {
        id: 'water_conservation_info',
        message: 'Water conservation efforts include implementing water-efficient technologies, recycling water, and promoting awareness about water-saving practices. How else can we assist you?',
        trigger: '4'
    },
    {
        id: 'sustainable_sourcing_info',
        message: 'Our sustainable sourcing practices involve partnering with suppliers who adhere to ethical and environmentally friendly standards, promoting fair trade, and reducing the carbon footprint of our supply chain. How else can we assist you?',
        trigger: '4'
    },
    {
        id: 'waste_management_tips',
        message: 'Effective waste management is essential for environmental sustainability. Here are some tips:\n1. Reduce waste by avoiding single-use plastics\n2. Reuse items whenever possible\n3. Recycle materials such as paper, glass, and plastic\n4. Compost organic waste\nHow else can we assist you?',
        trigger: '4'
    },
    {
        id: 'contact_human',
        message: 'Sure, we understand that sometimes you need to speak with a human. Please feel free to contact our customer support team at support@example.com.',
        end: true
    }
];

const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};

const config = {
    floating: true,
};

const ChatbotBubble = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Sustainability Bot"
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    )
}

export default ChatbotBubble;
