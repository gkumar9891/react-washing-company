import { useState } from "react";
import MenWash from "../components/MenWash";

const Dashboard = () => {
    const [inventory, setInventory] = useState({
        men: {
            label: 'Men',
            items: {
                shirt: {
                    label: 'Shirt',
                    items: {
                        wash_and_iron: {
                            label: 'Wash and Iron',
                            price: 40,
                        },
                        deep_clean: {
                            label: 'Deep Clean',
                            price: 20,
                        },
                        white_wash: {
                            label: 'White Wash',
                            price: 100,
                        }

                    }
                }
            }
        },
        women: {
            label: 'Women',
            items: {
                shirt: {
                    label: 'Shirt',
                    items: {
                        wash_and_iron: {
                            label: 'Wash and Iron',
                            price: 40,
                        },
                        deep_clean: {
                            label: 'Deep Clean',
                            price: 200,
                        },
                        white_wash: {
                            label: 'White Wash',
                            price: 1000,
                        }
                    }
                }
            }
        }
    })

    const [currentCategory, setCurrentCategory] = useState('men');

    function updateInventory(obj) {
        setInventory(inv => ({...inv, ...obj}))
    }

    return (
        <>
        <h1>Washing Details</h1>
        <header id="header">
            <nav id="main-navigation">
                <ul className="list-unstyled d-flex justify-content-center">
                    <li onClick={() => setCurrentCategory('men')}>Men</li>
                    <li onClick={() => setCurrentCategory('women')}>Women</li>
                    <li onClick={() => setCurrentCategory('kid')}>Kids</li>
                </ul>
            </nav>
        </header>
        <MenWash inventory={inventory[currentCategory]} label={currentCategory} updateInventory={updateInventory} up></MenWash>
        </>
    )
}

export default Dashboard;