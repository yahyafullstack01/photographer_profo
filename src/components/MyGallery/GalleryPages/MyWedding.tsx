import client from "@/sanity/sanity.client";
import { useState, useEffect } from "react";

export default function MyWedding() {
    return (
        <div className="Gallery_pages">
            <img
                className="Gallery_pages_img"
                src="/wedding.jpg"
                alt="The wedding bg"
            />
        </div>
    )
}