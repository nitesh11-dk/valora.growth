import React, { useState } from 'react';

interface PlanFormProps {
    initialValues?: any;
    onSubmit: (values: any) => void;
    onCancel: () => void;
    loading?: boolean;
}

const ICONS = ['zap', 'star', 'crown'];
const DURATIONS = ['1 Week', '1 Month', '3 Months'];

const PlanForm: React.FC<PlanFormProps> = ({ initialValues = {}, onSubmit, onCancel, loading }) => {
    const [form, setForm] = useState({
        name: initialValues.name || '',
        price: initialValues.price || '',
        originalPrice: initialValues.originalPrice || '',
        period: initialValues.period || '',
        views: initialValues.views || '',
        likes: initialValues.likes || '',
        reels: initialValues.reels || '',
        popular: initialValues.popular || false,
        discount: initialValues.discount || '',
        icon: initialValues.icon || 'zap',
        features: initialValues.features ? initialValues.features.join(', ') : '',
        message: initialValues.message || '',
        duration: initialValues.duration || '1 Week',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setForm(f => ({
                ...f,
                [name]: (e.target as HTMLInputElement).checked,
            }));
        } else {
            setForm(f => ({
                ...f,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...form,
            features: form.features.split(',').map((f: string) => f.trim()).filter(Boolean),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow max-w-lg mx-auto">
            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block font-semibold mb-1">Name</label>
                    <input name="name" value={form.name} onChange={handleChange} className="w-full border px-2 py-1 rounded" required />
                </div>
                <div className="flex-1">
                    <label className="block font-semibold mb-1">Icon</label>
                    <select name="icon" value={form.icon} onChange={handleChange} className="w-full border px-2 py-1 rounded">
                        {ICONS.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                    </select>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block font-semibold mb-1">Price</label>
                    <input name="price" value={form.price} onChange={handleChange} className="w-full border px-2 py-1 rounded" required />
                </div>
                <div className="flex-1">
                    <label className="block font-semibold mb-1">Original Price</label>
                    <input name="originalPrice" value={form.originalPrice} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                </div>
                <div className="flex-1">
                    <label className="block font-semibold mb-1">Discount</label>
                    <input name="discount" value={form.discount} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block font-semibold mb-1">Period</label>
                    <input name="period" value={form.period} onChange={handleChange} className="w-full border px-2 py-1 rounded" required />
                </div>
                <div className="flex-1">
                    <label className="block font-semibold mb-1">Duration</label>
                    <select name="duration" value={form.duration} onChange={handleChange} className="w-full border px-2 py-1 rounded">
                        {DURATIONS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block font-semibold mb-1">Views</label>
                    <input name="views" value={form.views} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                </div>
                <div className="flex-1">
                    <label className="block font-semibold mb-1">Likes</label>
                    <input name="likes" value={form.likes} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                </div>
                <div className="flex-1">
                    <label className="block font-semibold mb-1">Reels</label>
                    <input name="reels" value={form.reels} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                </div>
            </div>
            <div>
                <label className="block font-semibold mb-1">Popular</label>
                <input type="checkbox" name="popular" checked={form.popular} onChange={handleChange} />
            </div>
            <div>
                <label className="block font-semibold mb-1">Features (comma separated)</label>
                <input name="features" value={form.features} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
            </div>
            <div>
                <label className="block font-semibold mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} className="w-full border px-2 py-1 rounded" rows={2} />
            </div>
            <div className="flex gap-4 justify-end">
                <button type="button" onClick={onCancel} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
                <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700">
                    {loading ? 'Saving...' : 'Save'}
                </button>
            </div>
        </form>
    );
};

export default PlanForm; 