/**
 * menu_data.js
 * Datos iniciales para Estancia La Martina
 */

window.rawSeedData = {
    theme: 'estancialamartina',
    productSort: 'price-desc',
    variantSort: 'price-asc',
    categories: [
        {
            id: 'cat-entradas',
            name: 'Entradas',
            icon: 'Utensils',
            visible: true,
            items: [
                { name: 'Polpette al Sugo', price: 3900, desc: 'Albóndigas de carne de res y cerdo en salsa de tomate, gratinadas con queso mozzarella y grana padano.' },
                { name: 'Melanzane alla Parmigiana', price: 3510, desc: 'Mini rolls de berenjenas rellenas en salsa Napoli y gratinadas con mozzarella y grana padano.' },
                { name: 'Carpaccio di Manso', price: 4680, desc: 'Carpaccio clásico de lomito con aderezo de la casa, aceite de trufas, rucola y queso grana padano.' },
                { name: 'Tartar de Atún', price: 4680, desc: 'Aderezado con aceite de trufa, sal, pimienta, limón y salsa de soya sobre una cama de crema de mozzarella y puré de aguacate.' },
                { name: 'Tagliere di Afettati', price: 5850, desc: 'Tabla de embutidos varios, quesos, aceitunas, frutos secos, berenjenas y pimentones en aceite.' },
                { name: 'Camarones al Ajillo', price: 4680, desc: 'Preparados al horno y gratinados con mantequilla, aceite de oliva y pan rallado.' },
                { name: 'Tortellini in Brodo', price: 1980, desc: 'Preparados en un caldo de pollo y vegetales.' },
                { name: 'Bruschette Assortite', price: 4290, desc: '6 bruschettas al modo del chef.' },
                { name: 'Aperitivo de la Casa', price: 1950, desc: 'Aceitunas, frutos secos y bruschetta para picar.' },
                { name: 'Cestino di Pane', price: 975, desc: 'Cesta de pan.' }
            ]
        },
        {
            id: 'cat-ensaladas',
            name: 'Insalate',
            icon: 'Salad',
            visible: true,
            items: [
                { name: 'Ensalada César con Pollo', price: 4680, desc: '' },
                { name: 'Ensalada César con Camarones', price: 5070, desc: '' },
                { name: 'Insalata Burrata e Prosciutto Crudo', price: 5850, desc: 'Rucola, tomates cherry asados, mezclum de lechuga, burrata, jamón de parma y vinagreta de la casa.' },
                { name: 'Insalata Caprese', price: 4290, desc: 'Tomates, albahaca, mozzarella de búfala, pesto de albahaca, aceite de oliva, sal, pimienta y orégano.' },
                { name: 'Insalata Mediterránea', price: 5070, desc: 'Mezclum de lechuga, rucola, tomates cherry asados coronados con jamón de parma y bocconcini de búfala.' }
            ]
        },
        {
            id: 'cat-pizzas',
            name: 'Le Nostre Pizze',
            icon: 'Pizza',
            visible: true,
            items: [
                { name: 'Margherita', price: 3510, desc: 'Pomodoro, mozzarella de búfala, albahaca y orégano.' },
                { name: 'Margherita in Bianco', price: 3510, desc: 'Tomates rostizados, mozzarella, albahaca y orégano.' },
                { name: 'Cotto e Mozzarella', price: 3900, desc: 'Pizza Margherita y jamón de pierna.' },
                { name: 'Pepperoni', price: 3900, desc: 'Margherita con pepperoni.' },
                { name: 'Napoli', price: 4290, desc: 'Base Margherita con anchoas y aceitunas.' },
                { name: 'Mediterránea', price: 4290, desc: 'Tomates asados, mozzarella, albahaca, orégano, queso feta y polvo de aceitunas.' },
                { name: 'Primavera', price: 5070, desc: 'Base Margherita con cebolla, hongos, aceitunas, pimentón asado y maíz.' },
                { name: 'Trentina', price: 5070, desc: 'Base de crema de ajoporro, mozzarella, champiñones, maíz, tocineta y grana padano.' },
                { name: 'Cotto e Funghi', price: 4875, desc: 'Base Margherita con hongos y jamón de pierna.' },
                { name: 'Crudo, Rucola e Grana', price: 6240, desc: 'Margherita con rucola, jamón de parma y grana padano.' },
                { name: 'Crudo, Funghi e Gorgonzola', price: 6240, desc: 'Margherita, champiñones frescos, jamón de parma y queso gorgonzola.' },
                { name: 'La Martina', price: 5850, desc: 'Margherita con coppa de parma y stracciatella de mozzarella.' },
                { name: 'La Martina in Bianco', price: 5655, desc: 'Pizza La Martina sobre base de Margherita in Bianco.' },
                { name: 'Crudaiola', price: 5460, desc: 'Base de pesto de albahaca, mozzarella, tomates pico de gallo, rucola y burrata.' },
                { name: 'Pizza Carpaccio', price: 7020, desc: 'Base Margherita, rucola, carpaccio de lomito aderezado y grana padano.' },
                { name: 'Mortadella e Crema al Tartufo', price: 6240, desc: 'Base de crema al tartufo, tomates asados, mozzarella, mortadela italiana y bocconcini de búfala.' },
                { name: 'Marinera', price: 7020, desc: 'Base Margherita, mariscos salteados al ajillo, aceitunas y tomates confitados.' }
            ]
        },
        {
            id: 'cat-pastas',
            name: 'Pastas',
            icon: 'UtensilsCrossed',
            visible: true,
            items: [
                { name: 'Boloñesa', price: 3900, desc: '', icon: 'Wheat' },
                { name: 'Pesto', price: 3510, desc: '', icon: 'Sprout' },
                { name: '4 Quesos', price: 3900, desc: '', icon: 'Nut' },
                { name: 'Alfredo', price: 3900, desc: '', icon: 'Milk' },
                { name: 'Arrabiata', price: 3900, desc: '', icon: 'Flame' },
                { name: 'Amatricciana', price: 3900, desc: '', icon: 'Ham' },
                { name: 'Ragu di Polpette', price: 3900, desc: '', icon: 'CookingPot' },
                { name: 'Spaghetti ai Frutti di Mare', price: 5460, desc: 'Salsa de tomate o al aglio e olio, con calamares, camarones y mejillones.', icon: 'Fish' },
                { name: 'Spaghetti a la Carbonara', price: 5070, desc: 'Yema de huevo, pecorino romano, pancetta italiana y pimienta.', icon: 'Egg' },
                { name: 'Fetuccini con Langosta', price: 8580, desc: 'Salsa napoli, bisque de camarones, aceitunas, alcaparras y tomates cherry asados.', icon: 'Fish' },
                { name: 'Lasagna de Carne', price: 3900, desc: 'Pasta hecha en casa.', icon: 'ChefHat' },
                { name: 'Ravioli di Agnello', price: 5460, desc: 'Relleno de cordero al horno, mantequilla trufada y fondo de cordero.', icon: 'Beef' },
                { name: 'Ravioli di Ricotta e Spinacci', price: 5070, desc: 'Mantequilla sobre una cama de salsa Napoli y grana padano.', icon: 'Leaf' },
                { name: 'Gnocchi al Gorgonzola', price: 5460, desc: 'Gratinados con crema, queso gorgonzola, grana padano y pan rallado.', icon: 'Milk' },
                { name: 'Gnocchi a la Sorrentina', price: 5070, desc: 'Salsa Napoli, mozzarella, albahaca y gratinados con grana padano.', icon: 'Pizza' },
                { name: 'Papardelle a la Forestiera', price: 5850, desc: 'Salsa blanca con salciccia italiana, setas, champiñones y crema de trufas negras.', icon: 'CookingPot' }
            ]
        },
        {
            id: 'cat-principali',
            name: 'Principali (Brasas)',
            icon: 'Flame',
            visible: true,
            items: [
                { name: 'Robalo al Acqua Pazza', price: 6240, desc: 'Filete horneado sobre papas, vino blanco, aceitunas, alcaparras y tomates cherry.' },
                { name: 'Tagliata di Manzo', price: 6825, desc: '250gr centro de lomito, mantequilla de trufas, sal ahumada, rucola y grana padano.' },
                { name: 'Entrecote de Boeuf', price: 6240, desc: '300gr de solomo de primera con salsa bernesa. Incluye ensalada y papas.' },
                {
                    name: 'Spiedini (Brochetas)',
                    price: 0,
                    desc: 'A la plancha sobre salsa de yogurt Tzatziki. Incluye ensalada y acompañante.',
                    variants: [
                        { name: 'Lomito', price: 5070 },
                        { name: 'Mixto (Pollo/Lomito)', price: 4680 }
                    ]
                },
                { name: 'Polpo e Gamberi a la Brace', price: 7020, desc: 'Mix de pulpo y langostinos asados con marinada de ajo y perejil, crema alioli.' },
                { name: 'Langosta al Horno', price: 9360, desc: 'Mantequilla al ajillo y jengibre. Con papas fritas y ensalada de rucola.' }
            ]
        },
        {
            id: 'cat-postres',
            name: 'Dessert',
            icon: 'Cake',
            visible: true,
            items: [
                { name: 'Pizza de Nutella', price: 2340, desc: '' },
                { name: 'Pizza de Pistaccio', price: 2340, desc: '' },
                { name: 'Torta Helada Mixta', price: 1560, desc: 'Pistaccio, Chocolate, Mantecado y Brownie.' },
                { name: 'Tiramisu', price: 2535, desc: '' }
            ]
        },
        {
            id: 'cat-bebidas',
            name: 'Bebidas y Cafetería',
            icon: 'Coffee',
            visible: true,
            items: [
                { name: 'Café / Espresso', price: 585, desc: '' },
                { name: 'Capuccino', price: 1170, desc: '' },
                { name: 'Té / Infusión', price: 780, desc: '' },
                { name: 'Té Flor de Jamaica 500ml', price: 1365, desc: '' },
                { name: 'Té Lipton 500ml', price: 1355, desc: '' },
                { name: 'Agua Minalba 330ml', price: 585, desc: '' },
                { name: 'Agua Minalba Sparkling', price: 780, desc: 'Original, limón o naranja.' },
                { name: 'Refresco Bombita / Soda', price: 780, desc: 'Coca-Cola (Light/Zero), Sprite, Soda.' },
                { name: 'Refresco Botella 330ml', price: 780, desc: 'Pepsi, Colita, 7up.' },
                { name: 'Jugos Naturales', price: 1170, desc: 'Parchita y limón.' },
                { name: 'Frappe', price: 1560, desc: 'Parchita, limón, mora, piña o fresa.' }
            ]
        },
        {
            id: 'cat-vinos',
            name: 'Carta de Vinos',
            icon: 'Wine',
            visible: true,
            items: [
                { name: 'Copa de Vino / Sangría', price: 1560, desc: '' },
                { name: 'Copa de Prosecco', price: 1755, desc: '' },
                { name: 'Vino Blanco Terra Natale', price: 6552, desc: 'Italia.' },
                { name: 'Vino Blanco Rubiacaia', price: 8580, desc: 'Bianco Frizzante, Italia.' },
                { name: 'Vino Blanco Ripatello', price: 9625, desc: 'Rubicone Trebbiano, Italia.' },
                { name: 'Vino Rosado Sentir', price: 8736, desc: 'Garnacha/Tempranillo Orgánico, España.' },
                { name: 'Vino Tinto Terra Natale', price: 6552, desc: 'Italia.' },
                { name: 'Vino Tinto Cima del Paine Carmenere', price: 6240, desc: 'Chile.' },
                { name: 'Vino Tinto Cima del Paine Merlot', price: 6396, desc: 'Chile.' },
                { name: 'Vino Tinto Botte Buona Merlot', price: 6630, desc: 'Italia.' },
                { name: 'Vino Tinto Botte Buona Montepulciano', price: 7020, desc: 'Italia.' },
                { name: 'Prosecco Ophicus Brut', price: 7488, desc: 'España.' },
                { name: 'Prosecco Antico Rosone', price: 8580, desc: 'Blanc de Blancs, Italia.' },
                { name: 'Prosecco Contarini DOC', price: 10608, desc: 'Italia.' },
                { name: 'Prosecco Bottega Brut', price: 14040, desc: 'Millesimato.' },
                { name: 'Prosecco JP Chenet Ice', price: 14040, desc: 'Francia.' }
            ]
        },
        {
            id: 'cat-cocteles',
            name: 'Cocteles y Servicios',
            icon: 'Martini',
            visible: true,
            items: [
                { name: 'Jarra de Sangría', price: 5460, desc: '' },
                { name: 'Tinto Verano', price: 6240, desc: '' },
                { name: 'Whisky Old Parr', price: 21450, desc: '' },
                { name: 'Whisky Buchanans', price: 22464, desc: '' },
                { name: 'Whiskey 8 años', price: 15600, desc: 'Grants, Dewars, Black & White.' },
                { name: 'Ron Santa Teresa / Vodka Gordons', price: 13650, desc: '' },
                { name: 'Santa Teresa Linaje', price: 17550, desc: '' },
                { name: 'Vodka Stolichnaya', price: 15288, desc: '' },
                { name: 'Shot (Varios)', price: 1170, desc: 'Amari, Limoncello, Tequila, Cocuy, etc.' },
                { name: 'Tragos Nacionales', price: 1684, desc: 'Mojito, Daikiri, Gin Tonic, Vodka Tonic, Cubalibre.' },
                { name: 'Tragos Importados / Aperol / Mimosa', price: 2340, desc: '' },
                { name: 'Trago de 8 Años', price: 1755, desc: '' },
                {
                    name: 'Descorches',
                    price: 0,
                    desc: 'Tarifa por botella traída por el cliente.',
                    variants: [
                        { name: 'Whiskey', price: 7800 },
                        { name: 'Vinos / Prosecco', price: 3900 }
                    ]
                },
                { name: 'Cerveza Polar / Solera / Zulia', price: 780, desc: '' }
            ]
        }
    ]
};
