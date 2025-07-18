import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Check, Crown, Zap, Star } from 'lucide-react';
import PlanForm from './PlanForm';

const ICON_MAP = {
    zap: <Zap className="h-6 w-6 text-black" />,
    star: <Star className="h-6 w-6 text-black" />,
    crown: <Crown className="h-6 w-6 text-black" />,
};

const Dashboard = () => {
    const navigate = useNavigate();
    const [plans, setPlans] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editPlan, setEditPlan] = useState<any>(null);
    const [formLoading, setFormLoading] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const fetchPlans = async () => {
        try {
            setLoading(true);
            const res = await axios.get('https://valora-growth-backend.onrender.com/api/plans');
            setPlans(res.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to load plans');
            setLoading(false);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('isAdmin') !== 'true') {
            navigate('/admin');
            return;
        }
        fetchPlans();
    }, [navigate]);

    const handleAdd = () => {
        setEditPlan(null);
        setModalOpen(true);
    };

    const handleEdit = (plan: any) => {
        setEditPlan(plan);
        setModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this plan?')) return;
        try {
            await axios.delete(`https://valora-growth-backend.onrender.com/api/plans/${id}`);
            fetchPlans();
        } catch (err) {
            alert('Failed to delete plan');
        }
    };

    const handleFormSubmit = async (values: any) => {
        setFormLoading(true);
        try {
            if (editPlan) {
                await axios.put(`https://valora-growth-backend.onrender.com/api/plans/${editPlan._id}`, values);
            } else {
                await axios.post('https://valora-growth-backend.onrender.com/api/plans', values);
            }
            setModalOpen(false);
            setEditPlan(null);
            fetchPlans();
        } catch (err) {
            alert('Failed to save plan');
        } finally {
            setFormLoading(false);
        }
    };

    if (loading) return <div className="text-center py-10">Loading plans...</div>;
    if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

    const durations = ['1 Week', '1 Month', '3 Months'];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Admin Dashboard</h2>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        onClick={() => {
                            localStorage.removeItem('isAdmin');
                            navigate('/admin');
                        }}
                    >
                        Logout
                    </button>
                </div>
                <div className="flex justify-end mb-10">
                    <button
                        className="px-6 py-2 rounded-full font-semibold border bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-600 hover:shadow-lg transition-all duration-200"
                        onClick={handleAdd}
                    >
                        + Add Plan
                    </button>
                </div>
                {durations.map((duration) => (
                    <div key={duration} className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">{duration}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {plans[duration]?.map((plan: any, idx: number) => (
                                <div
                                    key={plan._id}
                                    className={`rounded-2xl shadow-lg p-8 flex flex-col items-center bg-white`}
                                >
                                    <div className="mb-4">{ICON_MAP[plan.icon as keyof typeof ICON_MAP] || <Zap className="h-6 w-6 text-black" />}</div>
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <div className="flex items-center mb-2">
                                        <span className="text-3xl font-bold mr-2">{plan.price}</span>
                                        <span className="text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                                        <span className="bg-white text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">{plan.discount}</span>
                                    </div>
                                    <div className="text-gray-600 mb-4">{plan.period}</div>
                                    <ul className="mb-6 space-y-2 text-left w-full">
                                        {plan.features.map((feature: string, i: number) => (
                                            <li key={i} className="flex items-center">
                                                <Check className="h-4 w-4 text-green-500 mr-2" /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-xs text-gray-500 mb-2">Views: {plan.views} | Likes: {plan.likes} | Reels: {plan.reels}</div>
                                    <div className="text-xs text-gray-500 mb-2">Popular: {plan.popular ? 'Yes' : 'No'}</div>
                                    <div className="text-xs text-gray-500 mb-2">Duration: {plan.duration}</div>
                                    <div className="text-xs text-gray-500 mb-2">Message: {plan.message?.slice(0, 40)}...</div>
                                    <div className="flex gap-2 mt-4">
                                        <button
                                            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition text-sm font-semibold"
                                            onClick={() => handleEdit(plan)}
                                        >Edit</button>
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition text-sm font-semibold"
                                            onClick={() => handleDelete(plan._id)}
                                        >Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal for Add/Edit Plan */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl relative">
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
                            onClick={() => { setModalOpen(false); setEditPlan(null); }}
                        >&times;</button>
                        <PlanForm
                            initialValues={editPlan}
                            onSubmit={handleFormSubmit}
                            onCancel={() => { setModalOpen(false); setEditPlan(null); }}
                            loading={formLoading}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Dashboard; 