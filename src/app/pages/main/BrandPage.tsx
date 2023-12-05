import { FC, useEffect, useState } from 'react';
import { KTIcon } from '../../../_metronic/helpers';

type Brand = {
    id: number;
    name: string;
    created_at: string | null;
    updated_at: string | null;
    media: string[];
};

type Props = {
    className: string;
};

export function BrandPage({ className }: Props) {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null); // Track the brand selected for editing

    useEffect(() => {
        // Fetch brands data from the API
        fetch('http://localhost:8000/api/brands')
            .then((response) => response.json())
            .then((data) => {
                setBrands(data.data);
            })
            .catch((error) => console.error('Error fetching brands:', error));
    }, []); // Empty dependency array to run the effect only once on component mount

    // Function to handle editing a brand
    const handleEditBrand = (brand: Brand) => {
        setSelectedBrand(brand);
        // Show your modal here
    };

    return (
        <div className={`card ${className}`}>
            <h1>Brands Page</h1>
            {/* ... (rest of your code) */}
            {/* begin::Table */}
            <table className="table table-row-dashed table-row-gray-300 gy-7">
                <thead>
                    <tr className="fw-bolder fs-6 text-gray-800">
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Created At</th>
                        <th>Media</th>
                        <th>Action</th> {/* Add Action column header */}
                    </tr>
                </thead>
                <tbody>
                    {brands.length > 0 && brands.map((brand: Brand) => (
                        <tr key={brand.id}>
                            <td>{brand.id}</td>
                            <td>{brand.name}</td>
                            <td>{brand.created_at}</td>
                            <td>
                                {brand.media?.map((media, index) => (
                                    <img key={index} src={media} alt={`Media ${index + 1}`} style={{ maxWidth: '50px' }} />
                                ))}
                            </td>
                            <td>
                                <button onClick={() => handleEditBrand(brand)}>Edit</button>
                                {/* You can use an icon or any other UI element */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* end::Table */}
        </div>
    );
}
